import { Component, Input } from '@angular/core';
import { PaginationData } from 'src/app/stores/blogs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  _items!: PaginationData;
  @Input() set items(data: PaginationData) {
    if (data.total > 0) {
      this._items = data;
    }
  }
}
