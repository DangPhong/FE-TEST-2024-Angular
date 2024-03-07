import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    EffectsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogDetailComponent,
      },
    ]),
  ],
})
export class BlogDetailModule {}
