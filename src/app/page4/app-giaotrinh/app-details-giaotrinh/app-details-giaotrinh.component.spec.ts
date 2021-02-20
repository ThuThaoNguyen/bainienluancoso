import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsGiaotrinhComponent } from './app-details-giaotrinh.component';

describe('AppDetailsGiaotrinhComponent', () => {
  let component: AppDetailsGiaotrinhComponent;
  let fixture: ComponentFixture<AppDetailsGiaotrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsGiaotrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsGiaotrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
