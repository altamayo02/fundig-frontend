import { TestBed } from '@angular/core/testing';

import { ServiceExecutionsService } from './service-executions.service';

describe('ServiceExecutionsService', () => {
  let service: ServiceExecutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExecutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
