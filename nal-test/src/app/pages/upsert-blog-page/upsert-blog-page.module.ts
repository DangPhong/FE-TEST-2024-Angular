import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertBlogPageComponent } from './upsert-blog-page.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { UpsertBlogTpmlModule } from '../../templates/upsert-blog-tpml/upsert-blog-tpml.module';
import { LoadingModule } from 'src/app/component/loading/loading.module';

@NgModule({
  declarations: [UpsertBlogPageComponent],
  imports: [
    LoadingModule,
    CommonModule,
    EffectsModule,
    UpsertBlogTpmlModule,
    RouterModule.forChild([
      {
        path: '',
        component: UpsertBlogPageComponent,
      },
    ]),
  ],
})
export class UpsertBlogPageModule {}
