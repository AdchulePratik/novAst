import { Component } from '@angular/core/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Real-Work'; //properties
  myName = 'Pratik';
  car = 'BMW';
  mySurname: string = 'Adchule';
  mySurname2?: string;//syntac change
  //mySurname2 :string;
  testproperty: any = 5000;

  constructor(private router: Router) { //constructor :just normal function but it will triger impilicity by compiler
    console.log('inside instructor..');
  }

  test(){
    var xyz = 100;
    this.mySurname2 = "Patil";
    
  }

  test2(){
    this.mySurname2 = this.mySurname;
    this.test();
  }
  redirect(){
    this.router.navigateByUrl('./Admin') 
  }
   aboutusRedirect(){
    this.router.navigateByUrl('./aboutus-Module/Aboutusdetails')
  }





}

