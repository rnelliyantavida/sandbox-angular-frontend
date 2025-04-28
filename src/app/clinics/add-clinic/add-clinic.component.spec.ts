import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddClinicComponent } from './add-clinic.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

xdescribe('AddClinicComponent', () => {
  let component: AddClinicComponent;
  let fixture: ComponentFixture<AddClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                HttpClientModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule],
      providers: [HttpClient],
      declarations: [ AddClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let formElement = fixture.debugElement.nativeElement.querySelector('#addClinicForm');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click cancel button', fakeAsync(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.nativeElement.querySelector('#cancel');
    spyOn(component, 'onCancel');
    buttonElement.click();
    tick();
    expect(component.onCancel).toHaveBeenCalled();
  }));

  it('should click add clinic button', fakeAsync(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.nativeElement.querySelector('#onSubmit');
    spyOn(component, 'onSubmit');
    buttonElement.click();
    tick();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it('should click add shift button', fakeAsync(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.nativeElement.querySelector('#addsift');
    spyOn(component, 'onAddShift');
    buttonElement.click();
    tick();
    expect(component.onAddShift).toHaveBeenCalled();
  }));

  it('should click X button', fakeAsync(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.nativeElement.querySelector('#shiftClear');
    spyOn(component, 'onShiftClear');
    buttonElement.click();
    tick();
    expect(component.onShiftClear).toHaveBeenCalled();
  }));

  it('form should be valid', async(() => {
    component.addClinicForm.controls['clinic'].setValue('AppleCrest');
    component.addClinicForm.controls['address'].setValue('Novi');
    expect(component.addClinicForm.valid).toBeTruthy();
  }));

  it('form should be invalid', async(() => {
    component.addClinicForm.controls['clinic'].setValue('');
    component.addClinicForm.controls['address'].setValue('');
    expect(component.addClinicForm.valid).toBeFalsy();
  }));
});

