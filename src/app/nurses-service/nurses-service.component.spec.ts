// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ConfirmationService, MessageService } from 'primeng/api';
// import { Button, ButtonDirective } from 'primeng/button';
// import { of } from 'rxjs'; 
// import { Nurse } from './nurse';
// import { NursesServiceComponent } from './nurses-service.component';
// import { NurseServiceService } from './nurse_service_service';
// import {Location} from '@angular/common'
// import { AppRoutingModule } from '../app-routing.module';
// import {routes} from 'src/app/app-routing.module'

// describe('NursesServiceComponent', () => {
//   let component: NursesServiceComponent;
//   let fixture: ComponentFixture<NursesServiceComponent>;
//   let location: Location;
//   let router: Router;
//   //let nurseService: NurseServiceService;
//   const reqResponse = [
//         {
//           "id": "1000",
//           "name": "Jaimin",
//           "address": " Haggerty Road",
//           "phone": "5614517060",
//           "email_id": "jjariwala@miraclesoft.com",
//           "preferred_location": "Novi, MI"
//         },
//         {
//           "id": "1001",
//           "name": "Jaimin 2",
//           "address": " Haggerty Road",
//           "phone": "5614517060",
//           "email_id": "jjariwala@miraclesoft.com",
//           "preferred_location": "Novi, MI"
//         }
//       ];

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ NursesServiceComponent ],
//       imports:[HttpClientModule,RouterTestingModule,RouterTestingModule.withRoutes(routes)],
//       providers:[
//         MessageService,
//         ConfirmationService,
//         {provide: NurseServiceService, useClass: NurseServiceService}
//       ]
//     })
//     .compileComponents().then(()=>{
//       router = TestBed.get(Router);
//       //nurseService : TestBed.inject(NurseServiceService);
//       location = TestBed.get(Location);
//       fixture = TestBed.createComponent(NursesServiceComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();          
//     });
//   });
 
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should return nurses',() => {
//     expect(component.nurses).toEqual(reqResponse);
//   });
//   it('on edit nurse button click',() => {
//     expect(component.nurseDialog).toBe(false);
//     component.editNurse(component.getNurse(1000));
//     expect(component.nurseDialog).toBe(true);
//   });

//   it('should route to add nurse on click',fakeAsync(()=> {
//     router.initialNavigation();
//     router.navigate(['']);
//     tick();
//     expect(location.path()).toBe('/nurseService');
//     component.openNew();
//     tick();
//     expect(location.path()).toBe('/addNurse')   
//     // fixture.detectChanges();
//     // let buttonElement =fixture.debugElement.query(By.css('add-nurse-button')).nativeElement.click();
//     // if(buttonElement!=null){
//       // let spy = spyOn(component,'openNew');
//       // fixture.detectChanges();
//       // //let buttonElement =fixture.debugElement.queryAll(By.css('#add-nurse-button'))[0];
//       // //buttonElement.triggerEventHandler('click',null);
//       // ///fixture.detectChanges();
//       // //expect(component.openNew()).toHaveBeenCalled();
//       // //expect(spy).toHaveBeenCalled();
//       // let button = document.getElementById('#add-nurse-button')
//       // button.click();
//       // expect(component.openNew()).toHaveBeenCalled();

//     //}
//     // else{
//     //   console.log("=====================Failed ===============================");
//     // }
//     // const element:HTMLElement = fixture.nativeElement;
//     // button: HTMLElement = element.querySelector('#add-nurse-button').   
//   }));

//   it('should call edit nurse on click edit', ()=>{
//     expect(component.nurse).toEqual({});
//     component.editNurse(component.getNurse(1000))
//     expect(component.nurse).not.toBe(null);
//     expect(component.nurseDialog).toBeTruthy();

//   })
//   // describe('getNurses',()=>{
//   //   const reqResponse = [
//   //     {
//   //       "id": "1000",
//   //       "name": "Jaimin",
//   //       "address": " Haggerty Road",
//   //       "phone": "5614517060",
//   //       "email_id": "jjariwala@miraclesoft.com",
//   //       "preferred_location": "Novi, MI"
//   //     },
//   //     {
//   //       "id": "1001",
//   //       "name": "Jaimin 2",
//   //       "address": " Haggerty Road",
//   //       "phone": "5614517060",
//   //       "email_id": "jjariwala@miraclesoft.com",
//   //       "preferred_location": "Novi, MI"
//   //     }
//   //   ];
//   //   let response;
//   //   spyOn(nurseService,'getNurses').and.returnValue(reqResponse)
//   //   nurseService.getNurses().subscribe(res=>{
//   //     response = res
//   //   }
//   // })
// });
