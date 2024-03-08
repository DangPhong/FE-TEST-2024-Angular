import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UpsertBlogState, upsertBlogFeatureKey } from './upsert-blog.reducers';
import { GetBlogEditData, RequestBodyUpsertData } from './upsert-blog.model';

export const selectBlogDetailState =
  createFeatureSelector<UpsertBlogState>(upsertBlogFeatureKey);

export const selectGetBlogUpsertDisplay = createSelector(
  selectBlogDetailState,
  (projector): GetBlogEditData => projector.getUpsertData
);

export const selectUpsertBlogData = createSelector(
  selectBlogDetailState,
  (projector): RequestBodyUpsertData => projector.upsertBlogData
);

export const selectIsLoading = createSelector(
  selectBlogDetailState,
  (projector): boolean => projector.isLoading
);
