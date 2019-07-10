import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayLoggerService {

  printLoggerInfo() {
    console.log('this is a logger~!');
  }

  constructor() { }
}
