import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { BlogDetailService } from 'src/app/services/blog-detail/blog-detail.service';
import {
  GetBlogDetailData,
  GetBlogEditData,
  RequestBodyUpsertData,
} from 'src/app/stores/blog-detail';

@Component({
  selector: 'app-upsert-blog-page',
  templateUrl: './upsert-blog-page.component.html',
  styleUrls: ['./upsert-blog-page.component.scss'],
})
export class UpsertBlogPageComponent implements OnInit, OnDestroy {
  item!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: BlogDetailService
  ) {}
  ngOnDestroy(): void {
    this.item = of(null);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (!!params?.params?.id) {
        this.service.fetchBlogDetailData(params?.params?.id);
      }
    });

    this.item = this.service.getBlogDetailData();
  }
  upsertBlog(event: { action: string; value: RequestBodyUpsertData }) {
    const { action, value } = event;
    this.service.upsertBlog(value);
  }
}
