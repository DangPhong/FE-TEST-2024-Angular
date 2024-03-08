import { Component, Input } from '@angular/core';
import { BlogDetailData } from './blog-detail-tpml.component.i';

@Component({
  selector: 'app-blog-detail-tpml',
  templateUrl: './blog-detail-tpml.component.html',
  styleUrls: ['./blog-detail-tpml.component.scss'],
})
export class BlogDetailTpmlComponent {
  @Input() blogDetailData: BlogDetailData = {};
}
