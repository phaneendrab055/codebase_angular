import { TestBed } from '@angular/core/testing';

import { MyPlanetserviceService } from './my-planetservice.service';

describe('MyPlanetserviceService', () => {
  let service: MyPlanetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlanetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
