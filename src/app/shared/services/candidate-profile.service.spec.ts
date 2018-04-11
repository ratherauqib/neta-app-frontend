import { TestBed, inject } from '@angular/core/testing';

import { CandidateProfileService } from './candidate-profile.service';

describe('CandidateProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateProfileService]
    });
  });

  it('should be created', inject([CandidateProfileService], (service: CandidateProfileService) => {
    expect(service).toBeTruthy();
  }));
});
