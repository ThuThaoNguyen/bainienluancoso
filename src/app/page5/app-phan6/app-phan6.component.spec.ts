import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan6Component } from './app-phan6.component';

describe('AppPhan6Component', () => {
  let component: AppPhan6Component;
  let fixture: ComponentFixture<AppPhan6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
