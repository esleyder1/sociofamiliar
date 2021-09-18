import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beneficiariosListComponent } from './beneficiarios-list.component';

describe('beneficiariosListComponent', () => {
  let component: beneficiariosListComponent;
  let fixture: ComponentFixture<beneficiariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ beneficiariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(beneficiariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
