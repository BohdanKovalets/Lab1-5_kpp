import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xx: number[] = [];
  private yy: number[] = [];

  constructor(@Optional() private log: LogService) {}

  getTab(xn: number = 0.1, xk: number = 0.99, h: number = 0.2) { 
    this.xx = [];
    this.yy = [];

    for (let x = xn; x <= xk + 1e-10; x += h) {
      const y = x / (1 + x * x);
      this.xx.push(Number(x.toFixed(2)));
      this.yy.push(y);

      if (this.log) {
        this.log.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
      }
    }

    return { x: this.xx, y: this.yy };
  }
}
