import { TestBed, inject } from '@angular/core/testing';

import { WindowWidthService } from './window-width.service';

describe('WindowWidthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowWidthService]
    });
  });

  it('should be created', inject([WindowWidthService], (service: WindowWidthService) => {
    expect(service).toBeTruthy();
  }));
});
