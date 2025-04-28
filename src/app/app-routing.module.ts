import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClinicListComponent } from './clinics/clinic-list/clinic-list.component'
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';
import { NursesServiceComponent } from './nurses-service/nurses-service.component';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { DraftComponent } from './schedule/draft/draft.component';

export const routes: Routes = [
  {path: 'nurseService', component: NursesServiceComponent},
  {path: 'addNurse', component: AddNurseComponent},
  {path: 'clinicList', component: ClinicListComponent},
  {path: 'AddClinic', component: AddClinicComponent},
  {path:'',redirectTo:'nurseService',pathMatch:'full'},
  {path: 'draftService', component: DraftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
