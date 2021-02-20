import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan9Component } from './app-phan9.component';

describe('AppPhan9Component', () => {
  let component: AppPhan9Component;
  let fixture: ComponentFixture<AppPhan9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
