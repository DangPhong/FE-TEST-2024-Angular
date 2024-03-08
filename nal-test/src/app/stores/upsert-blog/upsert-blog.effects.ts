import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as upsertBlogActions from './upsert-blog.actions';
import { BackendService } from '../../services/backend/backend.service';
import {
  UpsertResponseDataFailure,
  GetBlogEditData,
} from './upsert-blog.model';
import { UpsertResponse } from '../../services/backend/backend.service.i';

@Injectable()
export class UpsertBlogEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  public getUpsertBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(upsertBlogActions.getUpsertBlog),
      switchMap((payload) =>
        this.backendService.getBlogDetail(payload.id).pipe(
          map((res: GetBlogEditData) => {
            return upsertBlogActions.getUpsertBlogSuccess({
              blogEditData: res,
            });
          }),
          catchError((err: UpsertResponseDataFailure) =>
            of(upsertBlogActions.getUpsertBlogFailure({ payload: err }))
          )
        )
      )
    )
  );

  public upsertBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(upsertBlogActions.upsertBlog),
      switchMap((data) => {
        const id = data.payload.id ? data.payload.id : undefined;

        return this.backendService.upsertBlog(id, data.payload).pipe(
          map((res: UpsertResponse) => {
            return upsertBlogActions.upsertBlogSuccess({
              payload: res,
            });
          }),
          catchError((err: UpsertResponseDataFailure) =>
            of(upsertBlogActions.upsertBlogFailure({ payload: err }))
          )
        );
      })
    )
  );
}
