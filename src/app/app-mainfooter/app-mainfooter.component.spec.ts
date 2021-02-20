import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainfooterComponent } from './app-mainfooter.component';

describe('AppMainfooterComponent', () => {
  let component: AppMainfooterComponent;
  let fixture: ComponentFixture<AppMainfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
