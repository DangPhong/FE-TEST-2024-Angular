import { TestBed } from '@angular/core/testing';

import { UpsertBlogService } from './upsert-blog.service';

describe('UpsertBlogService', () => {
  let service: UpsertBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpsertBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
