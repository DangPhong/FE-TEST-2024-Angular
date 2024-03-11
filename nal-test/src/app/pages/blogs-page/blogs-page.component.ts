import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BlogsService } from '../../services/blogs/blogs.service';
import { EType } from './blog.page.i';
import { GetBlogsRqParam } from '../../services/backend/backend.service.i';
import { IEmitPageChange } from '../../component/pagination/pagination.i';
import { GetBlogsData, initialGetBlogsData } from '../../stores/blogs';

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
  isLoading = false;
  constructor(private router: Router, private blogServices: BlogsService) {}

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

    this.blogServices
      .getIsLoading()
      .pipe(takeUntil(this.notifier))
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
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

    this.blogServices.fetchBlogData(paramRequest);
  }

  searchItem(value: string) {
    const paramRequest: GetBlogsRqParam = {
      ...this.paramRequest,
      search: value,
    };

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

    this.blogServices.fetchBlogData(paramRequest);
  }

  addNewBlogDetail(value: { action: string; id?: number }) {
    const { action, id } = value;

    switch (action) {
      case 'edit':
        this.router.navigateByUrl(`${'edit-blog'}/${id}`);
        break;
      case 'create':
        this.router.navigateByUrl(`${'create-blog'}`);
        break;
      case 'view':
        this.router.navigateByUrl(`${'blog'}/${id}`);
        break;

      default:
        if (!!id) this.blogServices.deleteBlog(id);
        break;
    }
  }
}
