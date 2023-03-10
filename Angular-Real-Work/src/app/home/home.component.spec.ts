import { ComponentFixture,TestBed } from '@angular/core/testing';
import {HomeComponent } from './home.component';

describe('HomeComponent',()=>{
    let Component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations: [ HomeComponent ]
        })
        .compileComponents();

        fixture =TestBed.createComponent(HomeComponent);
        Component =fixture.componentInstance;
        fixture.detectChanges();
    });

    it ('shoild create',()=>{
        expect(Component).toBeTruthy();

    });

});