import { TestBed } from '@angular/core/testing';

import { beneficiarioService } from './beneficiario.service';

describe('beneficiarioService', () => {
  let service: beneficiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(beneficiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
