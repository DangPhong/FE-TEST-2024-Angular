import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../../stores/blogs';
import * as blogDetailActions from '../../stores/blog-detail/blog-detail.actions';
import {
  RequestBodyUpsertData,
  selectBlogDetail,
  selectUpsertBlogData,
} from '../../stores/blog-detail';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private store: Store) {}

  getBlogDetailData() {
    return this.store.select(selectBlogDetail);
  }

  fetchBlogDetailData(id: number) {
    this.store.dispatch(blogDetailActions.getBlogDetail({ id }));
  }

  getUpsertBlogDataBody() {
    return this.store.select(selectUpsertBlogData);
  }

  upsertBlog(data: RequestBodyUpsertData) {
    this.store.dispatch(blogDetailActions.upsertBlog({ payload: data }));
  }

  getIsLoading() {
    return this.store.select(selectIsLoading);
  }

  clearStore() {
    this.store.dispatch(blogDetailActions.cancelEntry());
  }
}
