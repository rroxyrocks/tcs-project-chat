import { TestBed } from '@angular/core/testing';

import { AuthenthicationService } from './authenthication.service';

describe('AuthenthicationService', () => {
  let service: AuthenthicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenthicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
