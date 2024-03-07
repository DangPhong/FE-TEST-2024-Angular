import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs/blogs.service';
import { Subject, take, takeUntil } from 'rxjs';
import { ItemsBlogData } from 'src/app/stores/blogs';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss'],
})
export class BlogsPageComponent implements OnInit, OnDestroy {
  notifier = new Subject();

  public  dataItems: ItemsBlogData[] = [];

  constructor(private router: Router, private blogServices: BlogsService) {}

  ngOnInit(): void {
    this.blogServices.fetchBlogData();

    this.blogServices
      .getBlogData()
      .pipe(takeUntil(this.notifier))
      .subscribe((blogData) => {
        if (blogData.data.items.length) {
          console.log(blogData); 
          this.dataItems=blogData.data.items
        }
      });
  }

  ngOnDestroy(): void {}

  onCLick() {}
}
