import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  carName!: string;
  data:any;
  fruit:any;

  constructor(private dataService: DataService){

  }
  ngOnInit(){
    //get set
    this.carName =this.dataService.carName; //getting carname propert's value
    this.dataService.fruit ="Orange";//seeting fruit property's value
  }
  //to fetch data from service
  getData(){
    //get set
    this.data =this.dataService.data;
    this.fruit =this.dataService.fruit;
    console.log('this.fruit',this.fruit); 
  }
  setData(){
    this.dataService.fruit =1234
  }



}
