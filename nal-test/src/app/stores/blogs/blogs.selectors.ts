import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogData } from './blogs.model';
import { blogsFeatureKey } from './blogs.reducers';

export const selectBlogsState =
  createFeatureSelector<BlogData>(blogsFeatureKey);
