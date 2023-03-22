import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mobNo!: number;
  ChangedMobNo! :number

  constructor(private dataService : DataService){}

  multiplication(){
    let res = this.dataService.multiplication(10,30);
    console.log('res',res);
 }

     edit(){
      this.mobNo = this.dataService.employee.mobNo;
      this.dataService.employee.mobNo = 9011742609;
      this.ChangedMobNo =   this.dataService.employee.mobNo ;
     }
}

