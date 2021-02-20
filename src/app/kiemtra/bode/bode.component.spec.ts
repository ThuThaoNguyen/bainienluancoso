import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodeComponent } from './bode.component';

describe('BodeComponent', () => {
  let component: BodeComponent;
  let fixture: ComponentFixture<BodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
