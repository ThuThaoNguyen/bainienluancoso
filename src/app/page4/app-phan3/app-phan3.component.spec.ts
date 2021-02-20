import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhan3Component } from './app-phan3.component';

describe('AppPhan3Component', () => {
  let component: AppPhan3Component;
  let fixture: ComponentFixture<AppPhan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
