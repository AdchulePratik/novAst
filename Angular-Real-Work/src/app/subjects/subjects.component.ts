import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  data: any

  constructor(private dataservice :DataService){

  }

  ngOnInit(){
    this.dataservice.formName ='abc';

  }
  sendDataoSubject(){
    this.dataservice.subjectData.next(this.data)
  }
  changeData(){
    this.dataservice.subjectData.next(80000)
  }


}
