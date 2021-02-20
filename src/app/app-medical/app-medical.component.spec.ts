import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMedicalComponent } from './app-medical.component';

describe('AppMedicalComponent', () => {
  let component: AppMedicalComponent;
  let fixture: ComponentFixture<AppMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
