import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  data = [10,20,50,30];
  myName = "pratik";
  disableBox = false;
  no = 70;
  surName = 'Patil';

  getValue(){
  // return 'Raj';
  return this.disableBox;
  }
  changingInputValue(){
   return this.surName;
  }

}
