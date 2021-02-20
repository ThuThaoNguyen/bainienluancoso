import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan12Component } from './app-phan12.component';

describe('AppPhan12Component', () => {
  let component: AppPhan12Component;
  let fixture: ComponentFixture<AppPhan12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
