import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nurse } from './nurse.model';

@Injectable({
  providedIn: 'root'
})
export class AssignNurseService {

  nurses: Nurse[] = [new Nurse(1,'Ruksana','available'),
                     new Nurse(2,'Shrilatha','available'),
                     new Nurse(3,'Mounica','scheduled'),
                     new Nurse(4,'Vishaka','alternate'),
                     new Nurse(5,'Praneetha','sickLeave'),
                     new Nurse(6,'Jaimin','annualLeave'),
                     new Nurse(7,'Sai Teja','scheduled')]

  constructor(private http: HttpClient) { }

  getAvailable(){
    let available: Nurse[] = [];
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].status === 'available'){
        available.push(this.nurses[i]);
      }
    }
    console.log(available);
    return available;
  }

  getScheduled(){
    let scheduled: Nurse[] = [];
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].status === 'scheduled'){
        scheduled.push(this.nurses[i]);
      }
    }
    return scheduled;
  }

  getAlternate(){
    let alternate: Nurse[] = [];
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].status === 'alternate'){
        alternate.push(this.nurses[i]);
      }
    }
    return alternate;
  }

  getSickLeave(){
    let sickLeave: Nurse[] = [];
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].status === 'sickLeave'){
        sickLeave.push(this.nurses[i]);
      }
    }
    return sickLeave;
  }

  getAnnualLeave(){
    let annualLeave: Nurse[] = [];
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].status === 'annualLeave'){
        annualLeave.push(this.nurses[i]);
      }
    }
    return annualLeave;
  }

  changeTheStatus(nurse: Nurse){
    for(let i=0; i<this.nurses.length; i++){
      if(this.nurses[i].id === nurse.id){
        this.nurses[i].status = 'scheduled';
      }
    }
  }

  searchNurse(value: string){
    this.http.get('/'+value).subscribe(response => {
      
    })
  }
}
