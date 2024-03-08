import { createReducer, on } from '@ngrx/store';
import {
  getUpsertBlog,
  getUpsertBlogFailure,
  getUpsertBlogSuccess,
  upsertBlog,
  upsertBlogFailure,
  upsertBlogSuccess,
} from './upsert-blog.actions';
import { GetBlogEditData, RequestBodyUpsertData } from './upsert-blog.model';

export const upsertBlogFeatureKey = 'upsert-blog';

// States
export interface UpsertBlogState {
  getUpsertData: GetBlogEditData;
  upsertBlogData: RequestBodyUpsertData;
  isLoading: boolean;
}

const initialGetUpsertData: GetBlogEditData = {
  id: undefined,
  title: '',
  content: '',
  image: {
    url: '',
  },
  comments_count: 0,
  created_at: '',
  updated_at: '',
};

export const initialUpsertBlogData: RequestBodyUpsertData = {
  id: undefined,
  blog: {
    title: '',
    content: '',
    image: '',
  },
};

export const initialState: UpsertBlogState = {
  getUpsertData: initialGetUpsertData,
  upsertBlogData: initialUpsertBlogData,
  isLoading: false,
};

export const upsertBlogReducer = createReducer<UpsertBlogState>(
  initialState,
  on(getUpsertBlog, upsertBlog, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(getUpsertBlogSuccess, (state, { blogEditData }) => {
    return {
      ...state,
      getUpsertData: blogEditData,
      isLoading: false,
    };
  }),

  on(getUpsertBlogFailure, upsertBlogFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(upsertBlogSuccess, (state, { payload }) => {
    return {
      ...state,
      upsertBlogData: {
        ...state.upsertBlogData,
        blog: {
          ...state.upsertBlogData.blog,
          title: payload.title,
          content: payload.content,
          image: payload.image.url,
        },
        id: payload.id,
      },
      isLoading: false,
    };
  })
);
