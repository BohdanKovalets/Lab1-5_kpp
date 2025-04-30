
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";
import { LogService } from './../service/logger/log.service';
import { RecursionService } from './../service/recursion/recursion.service';
import { SeriesService } from './../service/series/series.service';
import { TabService } from './../service/tab/tab.service';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule,
    MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonItem, IonInput,
    IonButton, IonCardTitle, IonList, IonLabel
  ]
})

export class ServicepagePage implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  lineChart: any;

  obj: any;
  xx: any[];
  yyTab: any[];
  xySeries: Map<any, any>;
  xyRecursion: Map<any, any>;

  yySer: any[];
  yyRec: any[];
  xyInput: any[];

  constructor(
    private tabService: TabService = new TabService(new LogService()),
    private seriesService: SeriesService = new SeriesService(new LogService()),
    private recursionService: RecursionService = new RecursionService(new LogService()),
  ) {
    this.xx = [];
    this.yyTab = [];
    this.xySeries = new Map();
    this.xyRecursion = new Map();

    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];

    Chart.register(...registerables);
  }

  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn);
    let xk1 = parseFloat(xk);
    let h1 = parseFloat(h);

    this.xx = [];
    this.yyTab = [];

    this.obj = this.tabService.getTab(xn1, xk1, h1);
    this.xx = this.obj.x.map((val: string) => parseFloat(val));
    this.yyTab = this.obj.y;

    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

    this.input();
    this.lineChartMethod();
  }

  input() {
    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];

    this.xx.forEach((value, index) => {
      let s: string = '';
      let y: number = this.yyTab[index];
      s = y.toFixed(4) + ' ';

      y = parseFloat(this.xySeries.get(value.toFixed(2)) ?? '0');
      this.yySer.push(y);
      s += y.toFixed(4) + ' ';

      y = parseFloat(this.xyRecursion.get(value.toFixed(2)) ?? '0');
      this.yyRec.push(y);
      s += y.toFixed(4);

      this.xyInput.push(s);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.xx.length > 0) {
        this.lineChartMethod();
      }
    }, 100);
  }

  lineChartMethod(): void {
    if (this.lineChart) {
      this.lineChart.destroy();
    }

    if (!this.lineCanvas) {
      console.error("Canvas element not found!");
      return;
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            data: this.yyTab,
            tension: 0.1
          },
          {
            label: 'Ряд',
            fill: false,
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            data: this.yySer,
            tension: 0.1
          },
          {
            label: 'Рекурсія',
            fill: false,
            borderColor: 'rgba(54,162,235,1)',
            borderWidth: 2,
            data: this.yyRec,
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'X'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Y'
            }
          }
        }
      }
    });
  }
}
