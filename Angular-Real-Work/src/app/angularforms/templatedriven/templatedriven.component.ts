import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']

})
export class TemplatedrivenComponent {
  fName!: string;
  // ownerUrl = "http://localhost:3000/owner";
  endPoint = "owner";
  ownerData: any;

  constructor(private dataservice: DataService, private router: Router,
    private CommonApiCallService: CommonApiCallService) {

  }

  GetOwnerData(){
    this.CommonApiCallService.getApiCall(this.endPoint).subscribe(respo =>{
      this.ownerData = respo
      console.log('res',respo);

    })
  }

  submit(values: any) {
    console.log('formValues', values);
    console.log(values.fullName);
    this.dataservice.formName =values.fullName;
     //post api call

    //redirect
    this.router.navigateByUrl('/angularFormsModule/loginSuccess')


  }

}
