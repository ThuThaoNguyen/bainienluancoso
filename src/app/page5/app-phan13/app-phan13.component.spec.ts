import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan13Component } from './app-phan13.component';

describe('AppPhan13Component', () => {
  let component: AppPhan13Component;
  let fixture: ComponentFixture<AppPhan13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
