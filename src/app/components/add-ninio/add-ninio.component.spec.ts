import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddninioComponent } from './add-ninio.component';

describe('AddninioComponent', () => {
  let component: AddninioComponent;
  let fixture: ComponentFixture<AddninioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddninioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddninioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
