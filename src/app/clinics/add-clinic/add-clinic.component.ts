import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clinic } from 'src/app/model/clinic.model';
import { ClinicService } from '../clinic-list/clinic.service';
import { AddClinicService } from './add-clinic.service';
import { Clinic } from './Clinic.model';
import { Shift } from './shift.model';
import {DialogService} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { AssignNurseComponent } from 'src/app/assign-nurse/assign-nurse.component';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.less']
})
export class AddClinicComponent implements OnInit {
  addClinicForm!: FormGroup;
  clinic!: Clinic;
  buttonMode: boolean;
  constructor(private addClinicService: AddClinicService, 
    private router: Router,
    private clinicService: ClinicService,
    public dialogService: DialogService, 
    public messageService: MessageService) {
      this.buttonMode = !addClinicService.editMode;
     }
  
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm(){
    let clinicShifts = new FormArray([]);
    this.addClinicForm = new FormGroup({
      'clinic': new FormControl(this.addClinicService.clinic.clinicName,Validators.required),
      'address': new FormControl(this.addClinicService.clinic.clinicAddress,Validators.required),
      'shifts': clinicShifts 
    })
  }

  onAddShift(){
    (<FormArray>this.addClinicForm.get('shifts')).push(
      new FormGroup({
        'shiftName': new FormControl(null,Validators.required),
        'startTime': new FormControl(null,Validators.required),
        'endTime': new FormControl(null,Validators.required)
      })
    );
  }

  onSubmit(){
    if(this.addClinicService.editMode){
      this.clinicService.allClinics[this.addClinicService.index] = new clinic(this.addClinicService.clinic.id,
        this.addClinicForm.get('clinic').value,
        this.addClinicForm.get('address').value); // for dummy data
    }
    if(!this.addClinicService.editMode){
      this.clinicService.allClinics.push(new clinic(this.clinicService.allClinics.length+1,
        this.addClinicForm.get('clinic').value,
        this.addClinicForm.get('address').value)); // for dummy data
    }
    const value = this.addClinicForm.value;
    this.addClinicService.addClinic(this.addClinicForm.value);
    this.reset();
    this.router.navigate(['clinicList']);
  }

  onCancel(){
    this.reset();
    this.router.navigate(['clinicList']);
  }

  onShiftClear(index: number){
    (<FormArray>this.addClinicForm.get('shifts')).removeAt(index);
  }

  get controls(){
    return (<FormArray>this.addClinicForm.get('shifts')).controls;
  }

  reset(){
    this.addClinicService.clinic= {
      id: null,
      clinicName: '',
      clinicAddress: ''
    }
    this.addClinicService.editMode = !this.addClinicService.editMode;
  }

  show() {
    this.ref = this.dialogService.open(AssignNurseComponent, {
        header: 'Add Nurse',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

    // this.ref.onClose.subscribe((nurse: string) =>{
    //     if (nurse) {
    //         this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
    //     }
    // });
 }

}
