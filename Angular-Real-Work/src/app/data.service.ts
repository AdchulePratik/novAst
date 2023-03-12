import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    name:'pratik',
    age: 26,
    mobNo: 9011742609
  };

  carName = 'BMW...';
  fruit! : any;

  constructor() { }
}
