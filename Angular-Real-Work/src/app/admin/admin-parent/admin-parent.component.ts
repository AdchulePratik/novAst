import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.css']
})
export class AdminParentComponent {
  parentCityName : any;
  fruit = ['apple','mango','banana','pupita'];
  cars = ['Thar','BMW','Rollceroice','Skoda'];
  obj = {
    HolderName:'Pratik',
    age:26,
    mobno:9011742609
  }
  parentTable = [
    {
      name:'Pratik',
      age:26,
      mobno:9011742609
    },
    {
      name:'Pratik',
      age:26,
      mobno:9011742609
    },
    {
      name:'Pratik',
      age:26,
      mobno:9011742609
    },
    {
      name:'Pratik',
      age:26,
      mobno:9011742609
    },
  ]

  dataFromChild: any;
  constructor(public dataservice :DataService){

  }

  parentData(event:any){
    console.log('input value',event.target.value);
    this.parentCityName = event.target.value;
    this.dataservice.cityNameService = event.target.value;

  }
  getChildData(value: any){
    this.dataFromChild =value;

  }



}
