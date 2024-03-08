import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs/blogs.service';
import { Subject, take, takeUntil } from 'rxjs';
import { GetBlogsData, ItemsBlogData } from 'src/app/stores/blogs';
import { IEmitPageChange } from 'src/app/component/pagination/pagination.i';
import { GetBlogsRqParam } from 'src/app/services/backend/backend.service.i';

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
          console.log(blogData);
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
