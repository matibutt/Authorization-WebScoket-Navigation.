import { TestBed } from '@angular/core/testing';

import { NominatimServiceService } from './nominatim-service.service';

describe('NominatimServiceService', () => {
  let service: NominatimServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominatimServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
