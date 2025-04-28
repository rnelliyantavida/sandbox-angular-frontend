import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AddClinicService } from './add-clinic.service';

describe('AddClinicService', () => {
  let service: AddClinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AddClinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
