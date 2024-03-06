import { createAction, props } from '@ngrx/store';
import { FailedReason } from './blogs.model';

const prefix = '[Blogs]';

export const getBlogs = createAction(`${prefix} Get blog list`);
export const getBlogsSuccess = createAction(`${getBlogs.type} success`, props<{blogs: any}>());
export const getBlogsFailure = createAction(`${getBlogs.type} failure`, props<FailedReason>());