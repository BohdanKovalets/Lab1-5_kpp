import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Product } from '../class/products/Products';
import { ProductsList } from '../class/products/ProductsLits';
import { Chart, registerables } from 'chart.js';
import { LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyHeaderComponent
  ],
})
export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  productsList = new ProductsList();

  dataUrl = 'https://api.jsonbin.io/v3/b/67c96114e41b4d34e4a1b5d3';

  loading: any;
  lineChart: any;

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.productsList.products.map((data) => data.name),
        datasets: [
          {
            label: 'Кількість на складі',
            borderColor: 'rgba(75,192,192,1)',
            data: this.productsList.products.map((data) => data.stock),
            backgroundColor: 'rgba(194, 238, 144, 0.6)',
          },
        ]
      }
    });
  }

  constructor(
    public LoadingController: LoadingController,
    private alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async load() {
    this.loading = await this.LoadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    });

    await this.loading.present();
    let data: any = [];
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        data = json;
        data = data.record;
        let i = 0;

        try {
          while (data[i] != undefined) {
            if (data[i].hasOwnProperty('stock')) {
              this.productsList.addProduct(data[i] as Product);
            } else throw new Error('Error load file');
            i++;
          }
        } catch (e) {
          this.presentAlert('Error read JSON');
          console.log((e as Error).message);
        }
        this.productsList.sortByCategory();
        this.lineChartMethod();
        this.loading.dismiss();
      });
  }

  ngOnInit() {
    this.load();
  }

  getGroupedByCategory() {
    return this.productsList.getGroupedByCategory();
  }

  trackByCategory(index: number, item: any) {
    return item.key;
  }

  trackByProduct(index: number, item: any) {
    return item.name;
  }

}
