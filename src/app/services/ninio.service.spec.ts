import { TestBed } from '@angular/core/testing';

import { ninioService } from './ninio.service';

describe('ninioService', () => {
  let service: ninioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ninioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
