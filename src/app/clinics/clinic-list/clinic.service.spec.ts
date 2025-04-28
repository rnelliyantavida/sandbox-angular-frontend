import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicListComponent } from './clinic-list.component';
import { ClinicService } from './clinic.service';
import { clinic } from './../../model/clinic.model';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

class MockedClinicService{
  deleteClinics(index:number){
      let allClinics : clinic[]= [new clinic(1,"sai","farmington"),
                                   new clinic(2,"new","novi")];
      allClinics.splice(index,1);
      return allClinics;
    }
}

describe('Test cases for the Service class',()=>{
  let service : ClinicService;
  let mockService : MockedClinicService;

beforeEach(() => {
    service = new ClinicService();
    mockService = new MockedClinicService();
  });

afterEach(() => {
        service= null;
        mockService = null;
 });

  //test case to test the mock - for fake method impl
   it('should return all clinics', () => {
        const  allClinics : clinic[]= [new clinic(1,"sai","farmington"),
                                       new clinic(2, "Jessie","Wixom")];
        const clinicDet = new clinic(1,"sai","farmington");

        spyOn(service, 'getClinics').and.callFake(()=>{
          return allClinics;
        });
        const res = service.getClinics();
        expect(res).toContain(clinicDet);
    });

    it('should delete the respective clinic',()=>{
       const  allClinics : clinic[]= [new clinic(1,"sai","farmington"),
                                       new clinic(2, "Jessie","Wixom")];
       const clinicDet = new clinic(2,"new","novi");

       const res = mockService.deleteClinics(1);  //call to mocked/fake class method
       expect(res).not.toContain(clinicDet);  //pass test case
       //expect(res).toContain(clinicDet); //fail test case
    });

});
