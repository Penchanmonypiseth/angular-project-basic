import { TestBed } from '@angular/core/testing';

import { ServicesUlService } from './services-ul.service';

describe('ServicesUlService', () => {
  let service: ServicesUlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesUlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
