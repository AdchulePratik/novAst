import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycles-hooks',
  templateUrl: './lifecycles-hooks.component.html',
  styleUrls: ['./lifecycles-hooks.component.css']
})
export class LifecyclesHooksComponent {
  @Input() parentData:any;
 
   //8 lF hooks :ngOnChanges,ngOnInit,ngDoCheck,
  //ngAfterContentInit,ngAfterContentChecked,
//ngAfterViewInit,AfterViwChecked,OnDestroy.

ngOnChanges(){
   // ngOnChanges():Called before ngOnInit() (if the component has bound inputs)
   //and whenever one or more data-bound input properties change.
   console.log('ngOnChanges Child....');

}
ngOnInit(){
  console.log('ngOnInit Child....');
  console.log('parentData',this.parentData);


}
ngDoCheck(){
  console.log('ngDoCheck Child....');

}
ngAfterContentInit(){
  console.log('ngAfterContentInit Child....');
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked Child...');

}
ngAfterViewInit(){
  console.log('ngAfterViewContent Child...');

}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked Child...');

}
ngOnDestroy(){
  console.log('ngOnDestroy Child...');

}






}
