import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IEmitPageChange } from 'src/app/component/pagination/pagination.i';
import { GetBlogsRqParam } from 'src/app/services/backend/backend.service.i';
import { GetBlogsData } from 'src/app/stores/blogs';

import { BlogsService } from '../../services/blogs/blogs.service';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss'],
})
export class BlogsPageComponent implements OnInit, OnDestroy {
  notifier = new Subject();

  public dataItems!: GetBlogsData;

  paramRequest: GetBlogsRqParam = {};

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
  }

  ngOnDestroy(): void {}

  pageChange(pagination: IEmitPageChange) {
    const paramRequest: GetBlogsRqParam = {
      ...this.paramRequest,
      page: pagination.page,
      offset: pagination.pageSize,
    };
    this.blogServices.fetchBlogData(paramRequest);
  }
}
