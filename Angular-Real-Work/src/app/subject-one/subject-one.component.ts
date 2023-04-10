import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.css']
})
export class SubjectOneComponent {
  subdata: any;

  constructor(private datservice :DataService){

  }

  ngOnInint(){
    this.datservice.subjectData.subscribe(value=>{
      this.subdata =value;

    })
  }

}
