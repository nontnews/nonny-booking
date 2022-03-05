import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Mock } from './mock';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  flightt:Flight[]=[]
  constructor() {
    this.flightt=Mock.mflight
   }
   getpage(){
     return this.flightt
   }
}
