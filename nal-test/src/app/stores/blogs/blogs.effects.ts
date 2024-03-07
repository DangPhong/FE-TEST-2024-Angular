import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as blogsActions from './blogs.actions';
import { BackendService } from '../../services/backend/backend.service';
import { GetBlogsReponse } from '../../services/backend/backend.service.i';

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
          map((res: GetBlogsReponse) =>
            blogsActions.getBlogsSuccess({ blogs: res })
          ),
          catchError((err) =>
            of(blogsActions.getBlogsFailure({ reason: err.message }))
          )
        )
      )
    )
  );

  public deleteBlog = createEffect(() => {
    return this.actions$.pipe(
      ofType(blogsActions.deleteBlog),
      switchMap((action) =>
        this.backendService.deleteBlog(action.payload).pipe(
          map(() =>
            blogsActions.deleteBlogSuccess({ payload: action.payload })
          ),
          catchError((err) =>
            of(
              blogsActions.deleteBlogFailure({
                payload: { reason: err.message },
              })
            )
          )
        )
      )
    );
  });

  public deleteBlogSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(blogsActions.deleteBlogSuccess),
      map(() => blogsActions.getBlogs())
    );
  });
}
