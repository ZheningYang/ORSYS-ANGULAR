import { TestBed } from '@angular/core/testing';

import { LkbService } from './lkb.service';

describe('LkbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LkbService = TestBed.get(LkbService);
    expect(service).toBeTruthy();
  });
});
