import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Nurse } from './nurse';
import { NurseServiceService } from './nurse_service_service';

@Component({
  selector: 'app-nurses-service',
  templateUrl: './nurses-service.component.html',
  styles: [
    `
        :host ::ng-deep .p-dialog .nurse-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `,
  ],
  styleUrls: ['./nurses-service.component.scss']
})
export class NursesServiceComponent implements OnInit {

  nurseDialog: boolean = false;

  nurses: Nurse[];

  nurse: Nurse = {};

  selectedNurses: Nurse[];

  submitted: boolean;
  preferred_location: String;
  preferred_locations: String[];
  results: String[];

  constructor( private nurseService: NurseServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) {

     }

  ngOnInit(): void {
    this.nurses = this.nurseService.getNurses();//.then((data) => (this.nurses = data));
    this.preferred_locations = ['Santa Cruz', 'Florida', 'Florencwille'];
  }
  openNew() {
    this.router.navigate(['addNurse']);
    // this.nurse = {};
    // this.submitted = false;
    // this.nurseDialog = true;
  }
  getNurse(id){
    this.nurses.forEach(n => {
      if(n.id==id)
        return n;
    })
    return null;
  }


  search(event) {
    let filtered: any[] = [];
    let query = event.query;
    console.log(query);
    for (let i = 0; i < this.preferred_locations.length; i++) {
      let item = this.preferred_locations[i];
      if (item.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.results = filtered;
  }

  editNurse(nurse: Nurse) {
    this.nurse = { ...nurse };
    this.nurseDialog = true;
  }

  deleteNurse(nurse: Nurse) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + nurse.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.nurses = this.nurses.filter((val) => val.id !== nurse.id);
        this.nurse = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.nurseDialog = false;
    this.submitted = false;
  }

  saveNurse() {
    this.submitted = true;

    if (this.nurse.name.trim()) {
      if (this.nurse.id) {
        this.nurses[this.findIndexById(this.nurse.id)] = this.nurse;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Nurse Info Updated',
          life: 3000,
        });
      } else {
        this.nurse.id = this.createId();
        this.nurses.push(this.nurse);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Nurse Created',
          life: 3000,
        });
      }

      this.nurses = [...this.nurses];
      this.nurseDialog = false;
      this.nurse = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.nurses.length; i++) {
      if (this.nurses[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
