import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { BlogDetailService } from 'src/app/services/blog-detail/blog-detail.service';
import { GetBlogDetailData, GetBlogEditData } from 'src/app/stores/blog-detail';

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
      this.service.fetchBlogDetailData(params?.params?.id);
    });

    this.item = this.service.getBlogDetailData();
  }
}
