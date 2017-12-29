import { TestBed, inject } from '@angular/core/testing';

import { CarouselServiceService } from './carousel-service.service';

describe('CarouselServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselServiceService]
    });
  });

  it('should be created', inject([CarouselServiceService], (service: CarouselServiceService) => {
    expect(service).toBeTruthy();
  }));
});
