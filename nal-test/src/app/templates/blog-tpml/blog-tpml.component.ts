import { Component, Input } from '@angular/core';
import {
  GetBlogsData,
  ItemsBlogData,
  PaginationData,
} from 'src/app/stores/blogs';

@Component({
  selector: 'app-blog-tpml',
  templateUrl: './blog-tpml.component.html',
  styleUrls: ['./blog-tpml.component.scss'],
})
export class BlogTpmlComponent {
  @Input() titlePage: string = 'Blog list';

  _dataItems: ItemsBlogData[] = [];

  @Input() set dataItems(data: GetBlogsData) {
    if (data.data.items.length) {
      this._dataItems = data.data.items;
      this._itemPagination = data.pagination;
    }
  }
  _itemPagination: PaginationData = {
    page: 1,
    count: 0,
    next: 0,
    total: 0,
    prev: 0,
    offset: 0,
  };
}
