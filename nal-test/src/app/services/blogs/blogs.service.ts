import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBlogs, selectIsLoading } from '../../stores/blogs';
import * as blogActions from '../../stores/blogs/blogs.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/stores';
import { GetBlogsRqParam } from '../backend/backend.service.i';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private store: Store<AppState>) {}

  getBlogData() {
    return this.store.select(selectBlogs);
  }

  fetchBlogData(param: GetBlogsRqParam) {
    console.log("dispatch",param);
    
    this.store.dispatch(blogActions.getBlogs(param));
  }

  getIsLoading() {
    return this.store.select(selectIsLoading);
  }

  deleteBlog(id: number) {
    this.store.dispatch(blogActions.deleteBlog({ payload: id }));
  }

  clearBlogStore() {
    this.store.dispatch(blogActions.cancelEntry());
  }
}
