import { TestBed } from '@angular/core/testing';

import { DBQueryService } from './dbquery.service';

describe('DBQueryService', () => {
  let service: DBQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
