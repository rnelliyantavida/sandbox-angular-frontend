import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { clinic } from './../../model/clinic.model';

@Injectable({
  providedIn: 'root',
})

export class ClinicService {
  private serviceUrl = '';

  //constructor(private http: HttpClient) {}
  constructor() {}
  allClinics : clinic[] = [new clinic(1,"vish","novi"),
                          new clinic(2, "Ruksana","Wixom"),
                          new clinic(3, "Jaimin","Bloomfield"),
                          new clinic(4, "somebody","Farmington"),
                          new clinic(5, "Praneetha","Dearborn")];


   getClinics(){
        return this.allClinics.slice();
   }

   deleteClinics(id : number) {
    console.log('Clinis is deleted from DB',id);
    let index = this.functionToGetTheIndex(id);
     console.log('Clinis is deleted from DB',id);
      this.allClinics.splice(index,1);
      //return this.http.delete<User>(`${this.serviceUrl}/${id}`);
    }

    functionToGetTheIndex(id:number){
    for(var i = 0; i < this.allClinics.length; i++) {
       if(this.allClinics[i].id === id) {
         return i;
       }
      }
    }
}
