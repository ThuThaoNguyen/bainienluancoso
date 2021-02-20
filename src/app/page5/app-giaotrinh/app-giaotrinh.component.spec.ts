import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGiaotrinhComponent } from './app-giaotrinh.component';

describe('AppGiaotrinhComponent', () => {
  let component: AppGiaotrinhComponent;
  let fixture: ComponentFixture<AppGiaotrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGiaotrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGiaotrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
