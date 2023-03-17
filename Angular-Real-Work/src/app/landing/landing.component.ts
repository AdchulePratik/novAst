import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  carName!: string;
  data:any;
  fruit!:any;
  color:any;
  studentName!: string;

  constructor(private dataService: DataService){

  }
  ngOnInit(){
    //get set
    this.carName =this.dataService.carName; //getting carname property's value
    this.dataService.fruit ="APPLE";//seeting fruit property's value
    this.color ='Red';
  }
  //to fetch data from service
  getData(){
    //get set
    this.data =this.dataService.data;
    this.fruit =this.dataService.fruit;
    console.log('this.fruit',this.fruit); 
    this.color =this.dataService;
    console.log('Whats color',this.color);
    
  }
  setData(){
    this.dataService.fruit =1234;
    this.color ='Red';
  }

  //aternate way of get and set:dont use this
  getStudentName(){
    this.studentName =this.dataService.getStudentName();
    console.log('studentName',this.studentName);  
  }
  setStudentName(){
    let name ='Pooja';
    this.dataService.setStudentName(name);
    console.log(this.dataService.studentName);   
  }
   //reusablity of function
   multiplication(){
    let res =this.dataService.multiplication(20,30);
    console.log('res',res);
    
   }



}
