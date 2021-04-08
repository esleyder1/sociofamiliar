import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ninioDetailsComponent } from './ninio-details.component';

describe('ninioDetailsComponent', () => {
  let component: ninioDetailsComponent;
  let fixture: ComponentFixture<ninioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ninioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ninioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
