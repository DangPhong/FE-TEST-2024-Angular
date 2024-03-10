import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTpmlComponent } from './blog-tpml.component';
import { FormsModule } from '@angular/forms';
import { ButtonListModule } from '../../component/button-list/button-list.module';
import { PaginationModule } from '../../component/pagination/pagination.module';

@NgModule({
  declarations: [BlogTpmlComponent],
  imports: [PaginationModule, FormsModule, ButtonListModule, CommonModule],
  exports: [BlogTpmlComponent],
})
export class BlogTpmlModule {}
