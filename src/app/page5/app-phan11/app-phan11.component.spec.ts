import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan11Component } from './app-phan11.component';

describe('AppPhan11Component', () => {
  let component: AppPhan11Component;
  let fixture: ComponentFixture<AppPhan11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
