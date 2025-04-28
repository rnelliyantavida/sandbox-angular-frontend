import { TestBed } from '@angular/core/testing';

import { AssignNurseService } from './assign-nurse.service';

describe('AssignNurseService', () => {
  let service: AssignNurseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignNurseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
