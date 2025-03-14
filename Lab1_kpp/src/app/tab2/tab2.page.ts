import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonInput, IonItem, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    MyHeaderComponent, IonCard, IonCardContent,
    IonCardHeader, IonCardTitle, IonInput, IonItem, IonButton
  ],
})
export class Tab2Page {
  public count: number = 0;
  public numbers: number[] = [];

  calculate(a1: any, b1: any) {
    try {
      let a = parseInt(a1),
          b = parseInt(b1);

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Введіть коректні числа!');
      }
      if (a > b) {
        throw new Error('Початкове значення a не може бути більше ніж b.');
      }

      this.numbers = [];
      for (let i = a; i <= b; i++) {
        if (i % 6 === 3) {
          this.numbers.push(i);
        }
      }
      this.count = this.numbers.length;
    } catch (error) {
      this.count = 0;
      this.numbers = [];
      console.log(error);
    }
  }
}
