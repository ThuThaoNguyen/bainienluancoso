import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan10Component } from './app-phan10.component';

describe('AppPhan10Component', () => {
  let component: AppPhan10Component;
  let fixture: ComponentFixture<AppPhan10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
