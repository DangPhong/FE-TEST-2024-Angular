import { Injectable } from '@angular/core';
import { AppState } from '../../stores';
import { Store } from '@ngrx/store';
import {
  RequestBodyUpsertData,
  selectGetBlogUpsertDisplay,
  selectIsLoading,
  selectUpsertBlogData,
} from '../../stores/upsert-blog';
import * as upsertBlogActions from '../../stores/upsert-blog/upsert-blog.actions';

@Injectable({
  providedIn: 'root',
})
export class UpsertBlogService {
  constructor(private store: Store<AppState>) {}

  getUpsertBlogDataInitDisplay() {
    return this.store.select(selectGetBlogUpsertDisplay);
  }

  fetchUpsertBlogInitDisplay(id: number) {
    this.store.dispatch(upsertBlogActions.getUpsertBlog({ id }));
  }

  getUpsertBlogDataBody() {
    return this.store.select(selectUpsertBlogData);
  }

  upsertBlog(data: RequestBodyUpsertData) {
    this.store.dispatch(upsertBlogActions.upsertBlog({ payload: data }));
  }

  getIsLoading() {
    return this.store.select(selectIsLoading);
  }
}
