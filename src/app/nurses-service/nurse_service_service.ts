import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Nurse } from "./nurse";

@Injectable()
export class NurseServiceService{
    constructor(private http: HttpClient){

    }
    getNurses() {
        // return this.http
        //   .get<any>('assets/nurses.json')
        //   .toPromise()
        //   .then((res) => <Nurse[]>res.data)
        //   .then((data) => {
        //     return data;
        //   });
        const res = [
          {
            "id": "1000",
            "name": "Jaimin",
            "address": " Haggerty Road",
            "phone": "5614517060",
            "email_id": "jjariwala@miraclesoft.com",
            "preferred_location": "Novi, MI"
          },
          {
            "id": "1001",
            "name": "Jaimin 2",
            "address": " Haggerty Road",
            "phone": "5614517060",
            "email_id": "jjariwala@miraclesoft.com",
            "preferred_location": "Novi, MI"
          }
        ];
        return res;

    }
    generateId() {
        let text = '';
        let possible =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        for (var i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    
        return text;
    }
}