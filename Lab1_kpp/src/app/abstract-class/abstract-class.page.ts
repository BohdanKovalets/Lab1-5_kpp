import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MobileDevice } from '../class/Abstract/MobileDevice';
import { FactoryMobileDevice } from '../class/Abstract/FactoryMobileDevice';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
  ]
})
export class AbstractClassPage implements OnInit {
  ngOnInit(): void {
    this.load();
  }
  
  data: any = [];
  mobileDevices: MobileDevice[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67ec4c298960c979a57c8581';
  
  async load() {
    this.data = [];
    this.mobileDevices = [];
    
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record.devices;
        
        for (let item of this.data) {
          let device = FactoryMobileDevice.getMobileDevice(
            item['type'],
            item['brand'],
            item['batteryCapacity'],
            item['weight'],
            item['cameraResolution'] || item['screenSize'] || item['ramSize']
          );
          device.displayInfo();
          this.mobileDevices.push(device);
        }
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }
  
  getColor(batteryCapacity: number): string {
    let sortedDevices = [...this.mobileDevices].sort((a, b) => b.getBatteryCapacity() - a.getBatteryCapacity());
    let topThree = sortedDevices.slice(0, 3);
    return topThree.some(device => device.getBatteryCapacity() === batteryCapacity) ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)';
  }
}
