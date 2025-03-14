import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    MyHeaderComponent,
    ExploreContainerComponent,
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
    IonGrid,
    IonRow,
    IonCol,
    CommonModule
  ],
})
export class Tab3Page {
  a: number[][] = [];

  arraycalc(n1: any) {
    try {
      let n = parseInt(n1);
      
      if (isNaN(n) || n <= 0) {
        throw new Error('Please enter a valid positive number for N');
      }

      this.a = [];

      for (let i = 0; i < n; i++) {
        this.a[i] = [];
        for (let j = 0; j < n; j++) {
          this.a[i][j] = Math.floor(Math.random() * 100) + 1; 
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  getColor(i: number, j: number) {
    return i === j && this.a[i][j] % 2 === 0 ? 'lightblue' : 'transparent';
  }
}
