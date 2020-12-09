import { TestBed } from '@angular/core/testing';

import { AmbulancesService } from './ambulances.service';

describe('AmbulancesService', () => {
  let service: AmbulancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
