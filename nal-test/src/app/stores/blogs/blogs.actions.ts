import { createAction, props } from '@ngrx/store';
import { FailedReason, GetBlogsData } from './blogs.model';

const prefix = '[Blogs]';

export const getBlogs = createAction(`${prefix} Get blog list`);

export const getBlogsSuccess = createAction(
  `${getBlogs.type} success`,
  props<{ blogs: GetBlogsData }>()
);

export const getBlogsFailure = createAction(
  `${getBlogs.type} failure`,
  props<FailedReason>()
);

export const deleteBlog = createAction(
  `${prefix} Delete blog`,
  props<{ payload: number }>()
);

export const deleteBlogSuccess = createAction(
  `${deleteBlog.type} success`,
  props<{ payload: number }>()
);

export const deleteBlogFailure = createAction(
  `${deleteBlog.type} failure`,
  props<{ payload: FailedReason }>()
);

export const cancelEntry = createAction(`${prefix} Cancel entry`);
