import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  private xy = new Map<string, number>();

  constructor(@Optional() private log: LogService) {}

  private computeRecursive(x: number, n: number = 0, sum: number = 0): number {
    if (n > 20) return sum;

    const term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1);
    return this.computeRecursive(x, n + 1, sum + term);
  }

  getTab(xn: number = 0.1, xk: number = 0.99, h: number = 0.2): Map<string, number> { 
    this.xy.clear();
    let x = xn;
    while (x <= xk + 1e-10) {
      const y = this.computeRecursive(x);
      this.xy.set(x.toFixed(2), parseFloat(y.toFixed(4)));

      if (this.log) {
        this.log.write(`x=${x.toFixed(2)}, y=${y.toFixed(4)}`);
      }

      x += h;
    }

    return this.xy;
  }
}
