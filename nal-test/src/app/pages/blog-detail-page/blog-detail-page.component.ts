import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogDetailService } from '../../services/blog-detail/blog-detail.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BlogDetailData } from '../../templates/blog-detail-tpml/blog-detail-tpml.component.i';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
})
export class BlogDetailPageComponent implements OnInit, OnDestroy {
  notifier = new Subject();
  blogDetailData!:BlogDetailData;
  constructor(
    private router: Router,
    private blogDetailServices: BlogDetailService
  ) {}
  ngOnInit(): void {
    this.blogDetailServices.fetchBlogDetailData(888);

    this.blogDetailServices
      .getBlogDetailData()
      .pipe(takeUntil(this.notifier))
      .subscribe((blogDetailData) => {
        if (blogDetailData) {
          console.log('blogDetailData', blogDetailData);
        }
      });
  }
  ngOnDestroy(): void {}
}
