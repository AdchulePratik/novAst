import { Component } from '@angular/core';  // import section : where we add dependency classes
import { Router } from '@angular/router';

@Component({  //component directive section: metadata about component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //main component class : where we write code logic
  title = 'Angular-Real-Work'; //properties
  myName = 'pratik';
  car = 'Mercedeez...';
  mySurname : string = 'adchule';
  mySurname2? : string; //syntax change
 // mySurname2 : string;
 testProperty : any = 5000;

  constructor(private router : Router){  // constructor : just normal function but it will triger implicity by compiler
      console.log('inside constuctor..');
  }

  public test(){
    var xyz = 100;
    this.mySurname2 = 'Patil';
  }

  test2(){
    this.mySurname2 = this.mySurname;
    this.test();
  }
  redirect(){
        this.router.navigateByUrl('/admin')
  }
  aboutUsRedirect(){
    this.router.navigateByUrl('/aboutUs-Module/aboutUsDetails')
  }
  // form(){
  //   this.router.navigateByUrl('/form')
  // }
  reactiveFormRedirect(){
    this.router.navigateByUrl('/reactiveForm')
  }
  reactiveFormRedirectByLazy(){
    this.router.navigateByUrl('/angularFormsModule/reactiveForm')
  }

}







