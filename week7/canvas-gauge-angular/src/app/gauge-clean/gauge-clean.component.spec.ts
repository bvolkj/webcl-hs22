import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeCleanComponent } from './gauge-clean.component';

describe('GaugeCleanComponent', () => {
  let component: GaugeCleanComponent;
  let fixture: ComponentFixture<GaugeCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugeCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
