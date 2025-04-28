import { Component, OnInit } from '@angular/core';
import { AssignNurseService } from './assign-nurse.service';
import { Nurse } from './nurse.model';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-assign-nurse',
  templateUrl: './assign-nurse.component.html',
  styleUrls: ['./assign-nurse.component.less']
})
export class AssignNurseComponent implements OnInit {
   available: Nurse[];
   scheduled: Nurse[];
   alternate: Nurse[];
   sickLeave: Nurse[];
   annualLeave: Nurse[];
   value: string;
  constructor(private assignNurseService: AssignNurseService, private ref:DynamicDialogRef) { }

  ngOnInit(): void {
     this.available = this.assignNurseService.getAvailable();
     this.scheduled = this.assignNurseService.getScheduled();
     this.alternate = this.assignNurseService.getAlternate();
     this.sickLeave = this.assignNurseService.getSickLeave();
     this.annualLeave = this.assignNurseService.getAnnualLeave();  
     this.assignNurseService.searchNurse(this.value);
  }

  selectNurse(nurse: Nurse){
    console.log(nurse);
    this.assignNurseService.changeTheStatus(nurse);
    this.ref.close(nurse);
  }
}
