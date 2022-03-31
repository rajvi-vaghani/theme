import { TestBed } from '@angular/core/testing';

import { TokenCrudService } from './token-crud.service';

describe('TokenCrudService', () => {
  let service: TokenCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
