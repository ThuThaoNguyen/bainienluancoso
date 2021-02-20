import { TestBed } from '@angular/core/testing';

import { AppCauhoiService } from './app-cauhoi.service';

describe('AppCauhoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCauhoiService = TestBed.get(AppCauhoiService);
    expect(service).toBeTruthy();
  });
});
