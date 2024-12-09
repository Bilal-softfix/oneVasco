import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMustHaveComponent } from './travel-must-have.component';

describe('TravelMustHaveComponent', () => {
  let component: TravelMustHaveComponent;
  let fixture: ComponentFixture<TravelMustHaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelMustHaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelMustHaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
