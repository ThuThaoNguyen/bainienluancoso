import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan2Component } from './app-phan2.component';

describe('AppPhan2Component', () => {
  let component: AppPhan2Component;
  let fixture: ComponentFixture<AppPhan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
