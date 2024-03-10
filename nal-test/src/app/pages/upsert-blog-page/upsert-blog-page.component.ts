import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable, of, Subject, take } from 'rxjs';

import {
  RequestBodyUpsertData,
  upsertBlogFailure,
  upsertBlogSuccess,
} from '../../stores/blog-detail';
import { BlogDetailService } from '../../services/blog-detail/blog-detail.service';

@Component({
  selector: 'app-upsert-blog-page',
  templateUrl: './upsert-blog-page.component.html',
  styleUrls: ['./upsert-blog-page.component.scss'],
})
export class UpsertBlogPageComponent implements OnInit, OnDestroy {
  item!: Observable<any>;
  notifier = new Subject();

  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private service: BlogDetailService,
    protected store: Store,
    private readonly router: Router,

    private actionListener$: ActionsSubject
  ) {}

  ngOnDestroy(): void {
    this.item = of(null);
    this.notifier.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (!!params?.params?.id) {
        this.service.fetchBlogDetailData(params?.params?.id);
        this.isLoading = false;
      } else {
        this.service.clearStore();
        this.isLoading = false;
      }
    });

    this.item = this.service.getBlogDetailData();

    this.actionListener$
      .pipe(ofType(upsertBlogSuccess), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['blogs']);
        }, 500);
      });

    this.actionListener$
      .pipe(ofType(upsertBlogFailure), take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }

  upsertBlog(event: { action: string; value: RequestBodyUpsertData }) {
    const { action, value } = event;

    this.isLoading = true;
    this.service.upsertBlog(value);
  }
}
