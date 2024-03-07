import { createSelector } from '@ngrx/store';

import { salesReportSelector } from '..';
import { GetBlogsData } from './blogs.model';

// export const selectBlogsState =
//   createFeatureSelector<BlogsState>(blogsFeatureKey);

export const selectBlogs = createSelector(
  salesReportSelector,
  (projector): GetBlogsData => {

    return projector.blogs;
  }
);

export const selectIsLoading = createSelector(
  salesReportSelector,
  (projector): boolean => projector.isLoading
);
