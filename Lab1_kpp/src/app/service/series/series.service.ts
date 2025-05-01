import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map<string, number>();

  constructor(@Optional() private log: LogService) {}

  getSeries(x: number): number {
    let sum = 0;
    const nMax = 20;
    for (let n = 0; n < nMax; n++) {
      const term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1);
      sum += term;
    }
    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 0.99, h: number = 0.2) {
    this.xy.clear();
    let x = xn;
    while (x <= xk + 1e-10) {
      const y = this.getSeries(x);
      this.xy.set(x.toFixed(2), parseFloat(y.toFixed(4)));

      if (this.log) {
        this.log.write(`x=${x.toFixed(2)}, y=${y.toFixed(4)}`);
      }

      x += h;
    }
    return this.xy;
  }
}
