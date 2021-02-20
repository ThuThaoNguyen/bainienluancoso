import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppKiemtraComponent } from './app-kiemtra.component';

describe('AppKiemtraComponent', () => {
  let component: AppKiemtraComponent;
  let fixture: ComponentFixture<AppKiemtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppKiemtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppKiemtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
