import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogsState, blogsFeatureKey } from './blog-detail.reducers';
import { GetBlogDetailSuccess } from './blog-detail.model';

export const selectBlogDetailState =
  createFeatureSelector<BlogsState>(blogsFeatureKey);

export const selectBlogDetail = createSelector(
  selectBlogDetailState,
  (projector): GetBlogDetailSuccess => projector.blogDetail
);

export const selectIsLoading = createSelector(
  selectBlogDetailState,
  (projector): boolean => projector.isLoading
);
