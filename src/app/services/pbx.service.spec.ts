import { TestBed } from '@angular/core/testing';

import { PBXService } from './pbx.service';

describe('PBXService', () => {
  let service: PBXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PBXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
