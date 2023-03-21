import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  para: any;
  //Note:property para = undefine/false = false ;
  //property para = value:any data type or true = true
  show: any = false;
  items = [10, 20, 30, 40];
  showStudentData: boolean = true;
  color = 'pink';
  styleProperty = 'main2';
  stylePropertyNew = 50000;
  multipleStyle = 'Adchule';
  inLineCss = 'red';
  headingProperty: any;
  student = [
    {
      name: 'Pratik',
      age: 26,
      hobby: 'Directoring'
    },
    {
      name: 'Pooja',
      age: 24,
      hobby: 'Dancing'
    },
    {
      name: 'Piya',
      age: 22,
      hobby: 'Scketing'
    },
    {
      name: 'jiya',
      age: 40,
      hobby: 'Swimming'
    },
  ]
  // hideDiv() {
  //   this.show = false;
  // }
  hidShowDiv(value: boolean) {
    this.show = value;
  }
  showDiv() {
    this.show = true;
  }

  toggle1() {
    this.show = !this.show; //!undefined or !false  = true
  }
  switchColors(color: string) {
    this.color = color;
  }
  setClass(): any {
    return 'main';
  }
}
