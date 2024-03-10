import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { BlogsService } from '../../services/blogs/blogs.service';
import { EType } from './blog.page.i';
import { ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { GetBlogsRqParam } from '../../services/backend/backend.service.i';
import { IEmitPageChange } from '../../component/pagination/pagination.i';
import {
  GetBlogsData,
  getBlogsFailure,
  getBlogsSuccess,
  deleteBlogSuccess,
  deleteBlogFailure,
  initialGetBlogsData,
} from '../../stores/blogs';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss'],
})
export class BlogsPageComponent implements OnInit, OnDestroy {
  notifier = new Subject();

  public dataItems!: GetBlogsData;

  paramRequest: GetBlogsRqParam = {};

  listKeySort = ['id', 'title', 'content', 'create_at', 'updated_at'];

  sortDirection = ['asc', 'desc'];

  sortObject: {
    key: string;
    direction: string;
  } = {
    key: 'id',
    direction: 'asc',
  };
  isLoading = true;
  constructor(
    private router: Router,
    private blogServices: BlogsService,

    private actionListener$: ActionsSubject
  ) {}

  ngOnInit(): void {
    this.blogServices.fetchBlogData(this.paramRequest);

    this.blogServices
      .getBlogData()
      .pipe(takeUntil(this.notifier))
      .subscribe((blogData) => {
        if (blogData.data.items.length) {
          this.dataItems = blogData;
        }
      });

    this.actionListener$
      .pipe(ofType(getBlogsFailure), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 0);
      });

    this.actionListener$
      .pipe(ofType(getBlogsSuccess), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 0);
      });

    this.actionListener$
      .pipe(ofType(deleteBlogSuccess), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 0);
      });

    this.actionListener$
      .pipe(ofType(deleteBlogFailure), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 0);
      });
  }

  ngOnDestroy(): void {
    this.sortObject = {
      key: 'id',
      direction: 'asc',
    };
    this.dataItems = initialGetBlogsData;
    this.paramRequest = {};
    this.blogServices.clearBlogStore();
  }

  pageChange(pagination: IEmitPageChange) {
    const paramRequest: GetBlogsRqParam = {
      ...this.paramRequest,
      page: pagination.page,
      offset: pagination.pageSize,
    };

    this.isLoading = true;
    this.blogServices.fetchBlogData(paramRequest);
  }

  searchItem(value: string) {
    const paramRequest: GetBlogsRqParam = {
      ...this.paramRequest,
      search: value,
    };

    this.isLoading = true;
    this.blogServices.fetchBlogData(paramRequest);
  }

  sortItem(value: string, type: EType | any) {
    if (type === EType.KEY) {
      this.sortObject.key = value;
    } else {
      this.sortObject.direction = value;
    }
    const paramRequest: GetBlogsRqParam = {
      ...this.paramRequest,
      sort_by: this.sortObject.key,
      sort_direction: this.sortObject.direction,
    };

    this.isLoading = true;
    this.blogServices.fetchBlogData(paramRequest);
  }

  addNewBlogDetail(value: { action: string; id?: number }) {
    const { action, id } = value;
    if (action === 'edit') {
      this.router.navigateByUrl(`${'edit-blog'}/${id}`);
    } else if (action === 'create') {
      this.router.navigateByUrl(`${'create-blog'}`);
    } else if (action === 'view') {
      this.router.navigateByUrl(`${'blog'}/${id}`);
    } else {
      this.isLoading = true;
      if (!!id) this.blogServices.deleteBlog(id);
    }
  }
}
