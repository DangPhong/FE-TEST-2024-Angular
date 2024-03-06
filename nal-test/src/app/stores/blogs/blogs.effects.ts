import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { BackendService } from 'src/app/services/backend/backend.service';
import * as blogsActions from './blogs.actions';

@Injectable()
export class BlogsEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  public getFilterItems = createEffect(() =>
    this.actions$.pipe(
      ofType(blogsActions.getBlogs),
      switchMap(() =>
        this.backendService.getBlogs().pipe(
          map((res: any) => blogsActions.getBlogsSuccess({ blogs: res })),
          catchError((err) =>
            of(blogsActions.getBlogsFailure({ reason: err.message }))
          )
        )
      )
    )
  );
}
