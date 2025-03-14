import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import {
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonInput, 
  IonItem, 
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent, 
    MyHeaderComponent,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle,
    IonInput, 
    IonItem, 
    IonLabel,
    IonButton,
    IonButtons,
    IonMenuButton,
  ],
})
export class Tab1Page {
  d: number = 0;
  
  calculate (a1: any, b1: any, c1: any) {
    try {
      let a = parseFloat(a1),
        b = parseFloat(b1),
        c = parseFloat(c1);
        
        if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
            throw new Error('Parameter is not a number!');
        }

        if ((a % 2) !== 0 && (b % 2) !== 0 && (c % 2) !== 0) {
          this.d = a * b * c;
        } else {
          const sumOfDigits = (num: number): number =>
            Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
          let digitSum = sumOfDigits(a) + sumOfDigits(b) + sumOfDigits(c);
  
          if (digitSum % 2 === 1) {
            this.d = Math.pow(a + b + c, 3);
          } else {
            throw new Error('The sum of the digits is even.');
          }
        }
    } catch (error) {
    this.d = 0;
    console.log(error);
    } 
  }
}