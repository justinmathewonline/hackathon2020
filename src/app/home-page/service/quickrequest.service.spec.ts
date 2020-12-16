import { TestBed } from '@angular/core/testing';

import { QuickrequestService } from './quickrequest.service';

describe('QuickrequestService', () => {
  let service: QuickrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
