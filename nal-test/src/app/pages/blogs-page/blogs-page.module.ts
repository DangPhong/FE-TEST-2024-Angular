import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsPageComponent } from './blogs-page.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { blogsFeatureKey, blogsReducer } from '../../stores/blogs';
import { BlogTpmlModule } from 'src/app/templates/blog-tpml/blog-tpml.module';

@NgModule({
  declarations: [BlogsPageComponent],
  imports: [
    CommonModule,
    EffectsModule,
    BlogTpmlModule,
    StoreModule.forFeature(blogsFeatureKey, blogsReducer),
    RouterModule.forChild([
      {
        path: '',
        component: BlogsPageComponent,
      },
    ]),
  ],
  exports: [BlogsPageComponent],
})
export class BlogsPageModule {}
