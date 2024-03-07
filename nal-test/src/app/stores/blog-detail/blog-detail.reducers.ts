import { createReducer, on } from '@ngrx/store';
import {
  getBlogDetail,
  getBlogDetailFailure,
  getBlogDetailSuccess,
} from './blog-detail.actions';
import { GetBlogDetailSuccess } from './blog-detail.model';

export const blogsFeatureKey = 'blogs-detail';

// States
export interface BlogDetailState {
  blogDetail: GetBlogDetailSuccess;
  isLoading: boolean;
}

export const initialGetBlogDetailData: GetBlogDetailSuccess = {
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

export const initialState: BlogDetailState = {
  blogDetail: initialGetBlogDetailData,
  isLoading: false,
};

export const blogDetailReducer = createReducer<BlogDetailState>(
  initialState,
  on(getBlogDetail, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(getBlogDetailSuccess, (state, { blogDetail }) => {
    return {
      ...state,
      blogDetail,
      isLoading: false,
    };
  }),

  on(getBlogDetailFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  })
);
