import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { BlogDetailTpmlModule } from '../../templates/blog-tpml/blog-detail-tpml/blog-detail-tpml.module';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    EffectsModule,
    BlogDetailTpmlModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogDetailComponent,
      },
    ]),
  ],
})
export class BlogDetailModule {}
