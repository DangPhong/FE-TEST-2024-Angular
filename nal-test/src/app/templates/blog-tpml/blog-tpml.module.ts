import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTpmlComponent } from './blog-tpml.component';
import { PaginationModule } from 'src/app/component/pagination/pagination.module';

@NgModule({
  declarations: [BlogTpmlComponent],
  imports: [CommonModule, PaginationModule],
  exports: [BlogTpmlComponent],
})
export class BlogTpmlModule {}
