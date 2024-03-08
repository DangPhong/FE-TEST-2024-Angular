import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { BlogDetailState, blogDetailReducer } from './blog-detail';
import { BlogsState, blogsReducer } from './blogs';
import { InjectionToken } from '@angular/core';
import { UpsertBlogState, upsertBlogReducer } from './upsert-blog';

export interface AppState {
  readonly blogStore: BlogsState;
  readonly blogDetailStore: BlogDetailState;
  readonly upsertBlogStore: UpsertBlogState;
}

export function getReducers(): ActionReducerMap<AppState> {
  return {
    blogStore: blogsReducer,
    blogDetailStore: blogDetailReducer,
    upsertBlogStore: upsertBlogReducer,
  };
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'reducers'
);

export const salesReportSelector =
  createFeatureSelector<BlogsState>('blogStore');
export const createScheduleSelector =
  createFeatureSelector<BlogDetailState>('blogDetailStore');

export const upsertBlogSelector =
  createFeatureSelector<BlogDetailState>('upsertBlogStore');
