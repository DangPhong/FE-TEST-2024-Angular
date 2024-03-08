import { createAction, props } from '@ngrx/store';
import {
  UpsertResponseDataFailure,
  GetBlogEditData,
  RequestBodyUpsertData,
  UpsertResponseData,
} from './upsert-blog.model';

const prefix = '[Upsert Blog]';

export const getUpsertBlog = createAction(
  `${prefix} Get blog detail`,
  props<{ id: number }>()
);

export const getUpsertBlogSuccess = createAction(
  `${getUpsertBlog.type} success`,
  props<{ blogEditData: GetBlogEditData }>()
);

export const getUpsertBlogFailure = createAction(
  `${getUpsertBlog.type} failure`,
  props<{ payload: UpsertResponseDataFailure }>()
);

export const upsertBlog = createAction(
  `${prefix} Upsert blog`,
  props<{ payload: RequestBodyUpsertData }>()
);

export const upsertBlogSuccess = createAction(
  `${upsertBlog.type} Upsert blog success`,
  props<{ payload: UpsertResponseData }>()
);

export const upsertBlogFailure = createAction(
  `${upsertBlog.type} Upsert blog failure`,
  props<{ payload: UpsertResponseDataFailure }>()
);

export const cancelEntry = createAction(`${prefix} Cancel entry`);
