import { TestBed, inject } from '@angular/core/testing';

import { GetScoreService } from './get-score.service';

describe('GetScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetScoreService]
    });
  });

  it('should be created', inject([GetScoreService], (service: GetScoreService) => {
    expect(service).toBeTruthy();
  }));
});
