import { TestBed } from '@angular/core/testing';

import { AdaptOrderService } from './adapt.order.service';

describe('AdaptOrderService', () => {
  let service: AdaptOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
