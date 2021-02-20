import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan8Component } from './app-phan8.component';

describe('AppPhan8Component', () => {
  let component: AppPhan8Component;
  let fixture: ComponentFixture<AppPhan8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
