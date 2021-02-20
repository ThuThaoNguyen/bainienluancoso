import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan5Component } from './app-phan5.component';

describe('AppPhan5Component', () => {
  let component: AppPhan5Component;
  let fixture: ComponentFixture<AppPhan5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
