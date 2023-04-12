import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

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
  matForm!: FormGroup;




  constructor(private dataservice: DataService, private http: HttpClient,
    private CommonApiCallService: CommonApiCallService,private fb: FormBuilder) {

  }

  ngOnInit() {

    //getting here formName property
    this.Username = this.dataservice.formName;

    this.subscibedData = this.CommonApiCallService.getApiCall(this.hotelDetailsEndPoint).subscribe(respo => {
      this.hotelDetails = respo;
      console.log('this.hotelDetails', respo);

    });

    this.matFormDef()
  }

  matFormDef(){
    this.matForm = this.fb.group({
      name: ['',[Validators.required]],
      mobno: ['',[Validators.required]],
      pass: ['']

    })
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
  visibility(){
    console.log('visss');

  }
  invisible(){
    console.log('hidee');

  }


  ngOnDestroy() {
    this.subscibedData.unsubscribe(); //to avoid memory leakage problem we should have to unsubscribe

  }


}
