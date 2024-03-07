import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { GetBlogsData } from './blogs.model';
import { createReducer, on } from '@ngrx/store';
import {
  deleteBlogFailure,
  deleteBlogSuccess,
  getBlogs,
  getBlogsFailure,
  getBlogsSuccess,
} from './blogs.actions';

export const blogsFeatureKey = 'blogs';

// States
export interface BlogsState {
  blogs: GetBlogsData;
  isLoading: boolean;
}

// export const blogsAdapter: EntityAdapter<BlogData> =
//   createEntityAdapter<BlogData>({
//     sortComparer: false,
//   });

export const initialGetBlogsData: GetBlogsData = {
  data: {
    items: [],
  },
  pagination: {
    page: 1,
    count: 0,
    next: 0,
    total: 0,
    prev: 0,
    offset: 0,
  },
};

export const initialState: BlogsState = {
  blogs: initialGetBlogsData,
  isLoading: false,
};

export const blogsReducer = createReducer<BlogsState>(
  initialState,
  on(getBlogs, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(getBlogsSuccess, (state, { blogs }) => {
    return {
      ...state,
      blogs,
      isLoading: false,
    };
  }),

  on(getBlogsFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(deleteBlogSuccess, deleteBlogFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  })
);
