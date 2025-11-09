import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LssAlertComponent } from './lss-alert.component';

describe('LssAlertComponent', () => {
  let component: LssAlertComponent;
  let fixture: ComponentFixture<LssAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LssAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LssAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
