import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  studentDataForm!: FormGroup;
  mySurName!: string;
  cities = ['Mumbai', 'Pune', 'Banglore', 'Delhi'];
  showPassword: boolean = false;
  password: any;
  confirmPassword: any;
  isMatched: boolean = false;
  boxValue: any;


  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private CommonApiCallService: CommonApiCallService) {

  }
  ngOnInit() {
    this.studentForm();
  }
  studentForm() {
    this.mySurName = 'pratik';
    this.studentDataForm = this.formBuilder.group({
      // name : ['Pratik'],

      name: ['', [Validators.required, Validators.minLength(5)]],
      MobNobr: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      tnc: [true, [Validators.requiredTrue]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]*$")]],
      title: ['', [Validators.required, this.dataService.wordValidator]],
      city: [''],
      password: [''],
      confirmPassword: ['']
    })
  }
  passwordValition(inputPassword: any) {
    console.log('pass', inputPassword.target.value);
    this.password = inputPassword.target.value;
    if (this.password == this.confirmPassword) {
      this.isMatched = false;
    }
    else {
      this.isMatched = true;
    }
  }
  confirmPasswordValition(confirmPass: any) {
    this.confirmPassword = this.confirmPassword.target.value;
    if (this.confirmPassword == this.confirmPassword) {
      this.isMatched = false;
    }
    else {
      this.isMatched = true;
    }

  }

  submit() {
  let endPoint = "user"
  console.log('form data',this.studentDataForm.value);
  this.CommonApiCallService.postApiCall(endPoint, this.studentDataForm.value).subscribe(respo =>{

  })



  }
  showPasswordFun() {
    this.showPassword = !this.showPassword;
  }
  data(event: any){
    console.log('event',event.target.value);
}
data1(value: any){
  console.log('value',value);
}
data2(){
  console.log('boxValue',this.boxValue);

}



}
