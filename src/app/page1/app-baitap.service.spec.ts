import { TestBed } from '@angular/core/testing';

import { baitapService } from './app-baitap.service';

describe('baitapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: baitapService = TestBed.get(baitapService);
    expect(service).toBeTruthy();
  });
});
