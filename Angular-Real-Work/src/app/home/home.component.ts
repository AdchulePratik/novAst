import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    mobNo!: number;
    ChangedMobNo!: number

    constructor(private dataservice: DataService) {

    }
    multiplication() {
        let res = this.dataservice.multiplication(10, 30);
        console.log('res', res);

    }
    edit() {
        this.mobNo = this.dataservice.employee.mobNo;
        this.dataservice.employee.mobNo = 9011742609;
        this.ChangedMobNo = this.dataservice.employee.mobNo;
    }
}