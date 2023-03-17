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

  carName = 'Mercedeez...';
  fruit! : any;

  //alternate way to get or set data to service
  studentName ='Harsha';
  employee ={
    name: 'Kanchan',
    age:26,
    mobNo:90117426069

  }
  constructor(){

  }
  getStudentName(){
    return this.studentName;
  }
  setStudentName(studentName:string){
    this.studentName = studentName;
  }
  multiplication(num1:number,num2:number){
    return num1 * num2;


  } 
}
