import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beneficiarioDetailsComponent } from './beneficiario-details.component';

describe('beneficiarioDetailsComponent', () => {
  let component: beneficiarioDetailsComponent;
  let fixture: ComponentFixture<beneficiarioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ beneficiarioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(beneficiarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
