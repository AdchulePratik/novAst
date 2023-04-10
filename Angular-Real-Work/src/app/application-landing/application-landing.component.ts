import { Component } from '@angular/core';
import { CommonApiCallService } from '../angularforms/common-api-call.service';

@Component({
  selector: 'app-application-landing',
  templateUrl: './application-landing.component.html',
  styleUrls: ['./application-landing.component.css']
})
export class ApplicationLandingComponent {

  constructor(private CommonApiCallService: CommonApiCallService){

  }

  deleteById(){
    this.CommonApiCallService.deleteApiCall('user',10).subscribe(respo=>{

    })
  }



}
