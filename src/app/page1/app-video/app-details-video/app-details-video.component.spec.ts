import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsVideoComponent } from './app-details-video.component';

describe('AppDetailsVideoComponent', () => {
  let component: AppDetailsVideoComponent;
  let fixture: ComponentFixture<AppDetailsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
