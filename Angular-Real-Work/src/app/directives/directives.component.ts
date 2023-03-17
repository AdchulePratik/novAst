import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  para:any;
   //Note:property para = undefine/false = false ; 
  //property para = value:any data type or true = true
  show:any = false;
  items =[10,20,30,40];
  showStudentData: boolean =true;
  // image ='/assets/image/rasika.png';
  color ='red';
  styleProperty ='main2';
  stylePropertyNew =1234;
  multipleStyle ='Adchule';



  student =[
    {
      name:'Pratik',
      age:26,
      hobby:'CHESS'
    },
    {
      name:'pooja',
      age:23,
      hobby:'drawing'
    },
    {
      name:'reshma',
      age:24,
      hobby:'Painting'
    },
    {
      name:'Rani',
      age:23,
      hobby:'sketching'
    },

  ]

  hideDiv(){
    this.show =false;
  }
  showDiv(){
    this.show =true;
  }
  toggle(){
    this.show = this.show; ////!undefined or !false  = true
  }
  switchColors(color:string){
    this.color = color;

  }


}
