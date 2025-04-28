// import { ComponentFixture, TestBed, async } from '@angular/core/testing';

// import { ClinicListComponent } from './clinic-list.component';
// import { ClinicService } from './clinic.service';
// import { clinic } from './../../model/clinic.model';
// import {RouterTestingModule} from '@angular/router/testing';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('ClinicListComponent', () => {
//   let component: ClinicListComponent;
//   let fixture: ComponentFixture<ClinicListComponent>;
//   //let service: ClinicService;
//   let element: DebugElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule,HttpClientModule],
//       providers: [HttpClient],
//       declarations: [ ClinicListComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ClinicListComponent);
//     component = fixture.componentInstance;
//     //fixture.detectChanges();
//     //service = TestBed.get(ClinicService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('title should be Clinics List',()=>{
//     element = fixture.debugElement.nativeElement.querySelector('p').textContent;
//       expect(element).toContain('value');
//     });

//   xit('Test button click', async(() => {
//       //const button = fixture.debugElement.query(By.css('#edit'));
//       //let buttonElement = fixture.debugElement.nativeElement.querySelector('#edit');
//        let buttonElement = fixture.debugElement.query(By.css('#edit'));


//                spyOn(component, 'onEditClinic');
//                 //Trigger click event after spyOn
//                 fixture.detectChanges();
//                   buttonElement.triggerEventHandler('click', null);

//                 fixture.whenStable().then(() => {
//                   expect(component.onEditClinic).toHaveBeenCalled();
//                 });
//     }));
// });
