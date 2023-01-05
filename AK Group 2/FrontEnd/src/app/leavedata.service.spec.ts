import { TestBed } from '@angular/core/testing';

import { LeavedataService } from './leavedata.service';

describe('LeavedataService', () => {
  let service: LeavedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
