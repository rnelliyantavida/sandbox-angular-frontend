import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
    events: any["add nurse"];
    options: any;
    header: any;
    productDialog = false;


  constructor() { }

  ngOnInit(): void {

      this.options = {
                  initialDate : '2019-01-01',
                  initialView: 'timeGridWeek',
                  slotDuration: '03:00',
                  timeGridEventMinHeight: '45px',
                  allDaySlot: false,
                  eventContent: this.events,
                  dateClick: this.onClick.bind(this),
                  editable: true,
                  selectable:true,
                  selectMirror: true,
                  dayMaxEvents: true,
                  contentHeight:'auto'
          };
  }

  onClick(){
     console.log('clicked!!');
     this.productDialog = true;
  }

}
