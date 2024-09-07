import { TestBed } from '@angular/core/testing';

import { SubcatigoriesService } from './subcatigories.service';

describe('SubcatigoriesService', () => {
  let service: SubcatigoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcatigoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
