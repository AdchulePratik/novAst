import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
    mobNo:8668316816

  }
  formName!: string;
  cityNameService!:any;
  subjectData = new Subject<any>()


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
  //tiTle,TITLe,TITLE,titLE
wordValidator(inputValue :any){
  console.log('..............',inputValue.value);
  let inputdata =inputValue.value?.toLowerCase();
  console.log('inputdata',inputdata);
  let isInclude =inputdata?.includes('title');
  console.log('isInclude',isInclude);
  return isInclude? {isValid : true } :null;




}



}
