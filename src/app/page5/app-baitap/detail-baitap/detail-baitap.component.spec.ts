import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBaitapComponent } from './detail-baitap.component';

describe('DetailBaitapComponent', () => {
  let component: DetailBaitapComponent;
  let fixture: ComponentFixture<DetailBaitapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBaitapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBaitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
