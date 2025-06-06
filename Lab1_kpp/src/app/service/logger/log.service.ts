import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write(logMessage: string): void {
    console.log(logMessage);
  }
  constructor() {}
}
