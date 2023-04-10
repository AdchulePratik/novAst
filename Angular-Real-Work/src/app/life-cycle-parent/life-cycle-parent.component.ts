import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.css']
})
export class LifeCycleParentComponent {
  test = 'pratik';
  check = 'done';

  constructor(private dataservice :DataService){
    console.log('constructor.....');


  }

  ngOnInit(){
    console.log('parent ngOnInit.....');
}
setData(){
  this.dataservice.subjectData.next('Banglore')
}
  ngOnChanges(){
      // ngOnChanges():Called before ngOnInit() (if the component has bound inputs)
  //and whenever one or more data-bound input properties change.
  console.log('parent ngOnChanges.....');

  }

}
