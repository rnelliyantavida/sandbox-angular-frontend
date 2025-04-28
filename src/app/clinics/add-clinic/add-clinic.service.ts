import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { clinic } from "src/app/model/clinic.model";
import { Clinic } from "./Clinic.model";


@Injectable({
    providedIn: 'root'
})
export class AddClinicService{
    index: number;
    editMode: boolean = false;
    clinic: clinic = {
        id: null,
        clinicName: '',
        clinicAddress: ''
    }
    constructor(private http: HttpClient){}
    addClinic(clinic: Clinic){
        console.log(clinic);
        const addClinicUrl: string = '';
        this.http.post(addClinicUrl,clinic).subscribe();
    }
}