import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeneficiarioComponent } from './add-beneficiario.component';

describe('AddbeneficiarioComponent', () => {
  let component: AddbeneficiarioComponent;
  let fixture: ComponentFixture<AddbeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbeneficiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
