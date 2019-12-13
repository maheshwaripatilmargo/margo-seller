import { TestBed } from '@angular/core/testing';

import { AdminoneService } from './adminone.service';

describe('AdminoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminoneService = TestBed.get(AdminoneService);
    expect(service).toBeTruthy();
  });
});
