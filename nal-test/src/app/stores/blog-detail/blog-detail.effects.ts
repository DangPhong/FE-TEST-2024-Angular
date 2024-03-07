import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as blogsActions from './blog-detail.actions';
import { BackendService } from '../../services/backend/backend.service';
import { GetBlogDetailSuccess } from './blog-detail.model';

@Injectable()
export class BlogDetailEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  public getBlogDetail = createEffect(() =>
    this.actions$.pipe(
      ofType(blogsActions.getBlogDetail),
      switchMap((payload) =>
        this.backendService.getBlogDetail(payload.id).pipe(
          map((res: GetBlogDetailSuccess) => {
            return blogsActions.getBlogDetailSuccess({ blogDetail: res });
          }),
          catchError((err) =>
            of(blogsActions.getBlogDetailFailure({ reason: err.message }))
          )
        )
      )
    )
  );
}
