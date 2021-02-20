import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan7Component } from './app-phan7.component';

describe('AppPhan7Component', () => {
  let component: AppPhan7Component;
  let fixture: ComponentFixture<AppPhan7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
