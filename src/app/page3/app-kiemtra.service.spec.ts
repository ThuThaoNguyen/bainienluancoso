import { TestBed } from '@angular/core/testing';

import { AppKiemtraService } from './app-kiemtra.service';

describe('AppKiemtraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppKiemtraService = TestBed.get(AppKiemtraService);
    expect(service).toBeTruthy();
  });
});
