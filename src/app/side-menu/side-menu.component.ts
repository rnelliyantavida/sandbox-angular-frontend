import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

    items: MenuItem[];

  ngOnInit(): void {
  this.items = [
              {
                  label: 'Schedule',
                  icon: 'pi pi-fw pi-calendar',
                  items: [
                      {label: 'Published', icon: 'pi pi-fw pi-calendar',
                      command: () => this.onDraftClick()},
                      {label: 'Draft', icon: 'pi pi-fw pi-calendar',
                      command: () => this.onDraftClick()}
                  ]
              },
              {
                  label: 'Leaves',
                  icon: 'pi pi-fw pi-stop-circle'
              },
              {
                  label: 'Clinics',
                  icon: 'pi pi-fw pi-building',
                  command: () => this.onClinicClick(),
               },
               {
                   label: 'Nurses',
                   icon: 'pi pi-fw pi-users',
                   command: () => this.onNurseClick(),
               },
               {
                   label: 'My Profile',
                   icon: 'pi pi-fw pi-user'
               }
                ];
    }

    onClinicClick(){
        this.router.navigate(['/clinicList']);
    };

    onDraftClick(){
        this.router.navigate(['/draftService']);
    };

    onNurseClick(){
     this.router.navigate(['/nurseService']);
    };
}
