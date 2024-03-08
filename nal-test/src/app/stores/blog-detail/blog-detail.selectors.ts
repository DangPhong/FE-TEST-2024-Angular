import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogDetailState, blogDetailSelector, blogsFeatureKey } from './blog-detail.reducers';
import { GetBlogDetailSuccess } from './blog-detail.model'; 

export const selectBlogDetail = createSelector(
  blogDetailSelector,
  (projector): GetBlogDetailSuccess => projector.blogDetail
);

export const selectIsLoading = createSelector(
  blogDetailSelector,
  (projector): boolean => projector.isLoading
);
