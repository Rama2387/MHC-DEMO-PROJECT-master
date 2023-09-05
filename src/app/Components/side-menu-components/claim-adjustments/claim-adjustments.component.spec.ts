import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAdjustmentsComponent } from './claim-adjustments.component';

describe('ClaimAdjustmentsComponent', () => {
  let component: ClaimAdjustmentsComponent;
  let fixture: ComponentFixture<ClaimAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimAdjustmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
