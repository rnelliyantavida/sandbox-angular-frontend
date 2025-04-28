import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddClinicService } from '../add-clinic/add-clinic.service';

import { clinic } from './../../model/clinic.model';
import { ClinicService } from './clinic.service';


@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {


  constructor(private router: Router, private clinicService: ClinicService, private addClinicService: AddClinicService) { }

  ngOnInit(): void {
  /* this.clinicService.getClinics().subscribe((res: any) => {
        this.dataSource.data = res;
      }); */
      this.clinics = this.clinicService.getClinics();
      console.log('clinics is ',this.clinics)
  }

  clinics : clinic[];
  productDialog = false;

   onEditClinic(clinic: clinic,index: number) {
     this.addClinicService.index = index;
     this.addClinicService.clinic = clinic;
     this.addClinicService.editMode = true;
    this.router.navigate(['/AddClinic']);
    }

      onClick(){
      console.log(" dialog created ");
      }

   gotoList(){
   console.log(" click here ");
      this.router.navigate(['/AddClinic']);
   }

   onDeleteClinic(id:number){
     console.log('Clinic deleted',id);
     this.clinicService.deleteClinics(id);
     this.clinics = this.clinicService.getClinics();
   }

}
