import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsPageComponent,
    children: [
      {
        path: 'blogs',
        loadChildren: () =>
          import('./pages/blogs-page/blogs-page.module').then(
            (m) => m.BlogsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
