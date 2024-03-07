import { createAction, props } from '@ngrx/store';
import {
  GetBlogDetailFailure,
  GetBlogDetailSuccess,
} from './blog-detail.model';

const prefix = '[Blogs Detail]';

export const getBlogDetail = createAction(
  `${prefix} Get blog detail`,
  props<{ id: number }>()
);

export const getBlogDetailSuccess = createAction(
  `${getBlogDetail.type} success`,
  props<{ blogDetail: GetBlogDetailSuccess }>()
);

export const getBlogDetailFailure = createAction(
  `${getBlogDetail.type} failure`,
  props<{ payload: GetBlogDetailFailure }>()
);

export const cancelEntry = createAction(`${prefix} Cancel entry`);
