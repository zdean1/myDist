import { TestBed } from '@angular/core/testing';

import { FlagArticleServiceService } from './flag-article-service.service';

describe('FlagArticleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagArticleServiceService = TestBed.get(FlagArticleServiceService);
    expect(service).toBeTruthy();
  });
});
