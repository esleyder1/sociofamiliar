import { ComponentFixture, TestBed } from '@angular/core/testing';

import { niniosListComponent } from './ninios-list.component';

describe('niniosListComponent', () => {
  let component: niniosListComponent;
  let fixture: ComponentFixture<niniosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ niniosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(niniosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
