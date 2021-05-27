import { TestBed } from '@angular/core/testing';

import { ProdutosHttpService } from './produtos-http.service';

describe('ProdutosHttpService', () => {
  let service: ProdutosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
