import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent{
    inputBoxvalue:any;
    inputBoxvlue1:any;
    arrayItem =[20,40,60,80,8888,444];
    arrayHetroItems =['Pratik',true,1000,50,20,'Prem']
    obj ={
        name:'Pratik';
        age:26
    }
    test?:string;
    checkBoxvalue:any;
    arrayItemCopy:any=[];

    ngOnInit(){
        this.arrayTest();
    }
    myFunction(value:any){
        this.inputBoxvalue =value;
    }
    myFunction1(data:any){
        console.log('data',data.target.value);

        // this.inputBoxValue1 = data.value;
    }
    myEvent(){
        console.log('.....');    
    }
    checkboxEvent(event:any){
        console.log(event);

        console.log('event',event.value);
        this.checkBoxvalue =event.target.value    
    }
    checkboxEvent1(data:any){
        console.log('value',data.value);
    }
    blurEvent(){
        console.log('blur..');
        
    }
    arrayTest(){
        this.arrayItem.forEach(ele=>{
            this.arrayItemCopy.push(ele);
        })
    }


}