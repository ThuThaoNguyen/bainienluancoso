import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarmainComponent } from './app-navbarmain.component';

describe('AppNavbarmainComponent', () => {
  let component: AppNavbarmainComponent;
  let fixture: ComponentFixture<AppNavbarmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
