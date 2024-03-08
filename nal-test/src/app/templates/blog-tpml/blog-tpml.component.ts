import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmitPageChange } from 'src/app/component/pagination/pagination.i';
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
  _itemPagination: PaginationData = {
    page: 1,
    count: 0,
    next: 0,
    total: 0,
    prev: 0,
    offset: 0,
  };

  _dataItems: ItemsBlogData[] = [];

  @Input() titlePage: string = 'Blog list';

  @Input() set dataItems(data: GetBlogsData) {
    if (data?.data?.items?.length) {
      this._dataItems = data.data.items;
      this._itemPagination = data.pagination;
    }
  }

  @Output() emitPagesize = new EventEmitter<IEmitPageChange>();

  pageChange(pagination: IEmitPageChange) {
    this.emitPagesize.emit(pagination);
  }
}
