import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  Username!: string;
  userData: any;
  // url = "http://localhost:3000/user";
  endPoint = "user";
  hotelDetailsEndPoint = "hotelDetails"
  hotelDetails: any;
  subscibedData: any;




  constructor(private dataservice: DataService, private http: HttpClient,
    private CommonApiCallService: CommonApiCallService) {

  }

  ngOnInit() {

    //getting here formName property
    this.Username = this.dataservice.formName;

    this.subscibedData = this.CommonApiCallService.getApiCall(this.hotelDetailsEndPoint).subscribe(respo => {
      this.hotelDetails = respo;
      console.log('this.hotelDetails', respo);

    });
  }
  getUserData() {
    this.CommonApiCallService.getApiCall(this.endPoint).subscribe(respo => {
      this.userData = respo;
      console.log('response', respo);

    })

    // this.http.get(this.url).subscribe(res=>{
    //   this.userData = res;
    // })
  }
  ngOnDestroy() {
    this.subscibedData.unsubscribe(); //to avoid memory leakage problem we should have to unsubscribe

  }


}
