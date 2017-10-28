import { TestBed, inject } from '@angular/core/testing';

import { RepogitoryService } from './repogitory.service';

describe('RepogitoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepogitoryService]
    });
  });

  it('should be created', inject([RepogitoryService], (service: RepogitoryService) => {
    expect(service).toBeTruthy();
  }));
});
