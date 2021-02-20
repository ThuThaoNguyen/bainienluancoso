import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan4Component } from './app-phan4.component';

describe('AppPhan4Component', () => {
  let component: AppPhan4Component;
  let fixture: ComponentFixture<AppPhan4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
