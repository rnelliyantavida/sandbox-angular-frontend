import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.css']
})
export class AddNurseComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  
  }
  displayModal: boolean;
  
  displayModalDialog() {
    this.displayModal = true;
  }
  
  disabled: boolean = true;
  
  value1: string;
  
  value2: string;
  
  value3: string;
  
  value4: string;
  
  value5: string = 'Disabled';
}
