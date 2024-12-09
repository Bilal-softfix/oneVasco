import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VascoStepsComponent } from './vasco-steps.component';

describe('VascoStepsComponent', () => {
  let component: VascoStepsComponent;
  let fixture: ComponentFixture<VascoStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VascoStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VascoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
