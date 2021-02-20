import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaitapComponent } from './app-baitap.component';

describe('AppBaitapComponent', () => {
  let component: AppBaitapComponent;
  let fixture: ComponentFixture<AppBaitapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBaitapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBaitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
