import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan14Component } from './app-phan14.component';

describe('AppPhan14Component', () => {
  let component: AppPhan14Component;
  let fixture: ComponentFixture<AppPhan14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
