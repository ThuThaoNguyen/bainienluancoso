import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCauhoiComponent } from './app-cauhoi.component';

describe('AppCauhoiComponent', () => {
  let component: AppCauhoiComponent;
  let fixture: ComponentFixture<AppCauhoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCauhoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCauhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
