import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeDetailsComponent } from './de-details.component';

describe('DeDetailsComponent', () => {
  let component: DeDetailsComponent;
  let fixture: ComponentFixture<DeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
