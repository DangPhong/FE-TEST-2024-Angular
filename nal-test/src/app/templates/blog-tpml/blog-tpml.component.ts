import { Component, Input } from '@angular/core';
import { ItemsBlogData } from 'src/app/stores/blogs';

@Component({
  selector: 'app-blog-tpml',
  templateUrl: './blog-tpml.component.html',
  styleUrls: ['./blog-tpml.component.scss'],
})
export class BlogTpmlComponent {
  @Input() titlePage: string = 'Blog list';

  @Input() dataItems: ItemsBlogData[] = [];
}
