import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NursesServiceComponent } from './nurses-service/nurses-service.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
//import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NurseServiceService } from './nurses-service/nurse_service_service';
import {ImageModule} from 'primeng/image';
import { HeaderComponent } from './header/header.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';
import { ClinicListComponent } from './clinics/clinic-list/clinic-list.component';
import { SplitterModule } from "primeng/splitter";
import {ListboxModule} from 'primeng/listbox';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleComponent } from './schedule/schedule.component';
import { DraftComponent } from './schedule/draft/draft.component';
import { PublishComponent } from './schedule/publish/publish.component';

import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AssignNurseComponent } from './assign-nurse/assign-nurse.component';
import {DialogService} from 'primeng/dynamicdialog';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NursesServiceComponent,
    HeaderComponent,
    ClinicsComponent,
    AddClinicComponent,
    ClinicListComponent,
    AddNurseComponent,
    SideMenuComponent,
    ScheduleComponent,
    DraftComponent,
    PublishComponent,
    AssignNurseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    //CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AutoCompleteModule,
    ImageModule,
    SplitterModule,
    ListboxModule,
    SplitButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    PanelMenuModule,
    RouterTestingModule,
    FullCalendarModule,
    DynamicDialogModule
  ],
  providers: [NurseServiceService, MessageService, ConfirmationService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
