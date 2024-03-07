import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogsState, blogsFeatureKey } from './blogs.reducers';
import { GetBlogsData } from './blogs.model';

export const selectBlogsState =
  createFeatureSelector<BlogsState>(blogsFeatureKey);

export const selectBlogs = createSelector(
  selectBlogsState,
  (projector): GetBlogsData => projector.blogs
);

export const selectIsLoading = createSelector(
  selectBlogsState,
  (projector): boolean => projector.isLoading
);
