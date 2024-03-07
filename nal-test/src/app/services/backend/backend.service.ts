import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetBlogsReponse,
  GetBlogsRqParam,
  ItemsBlogReponse,
  PostPutBlogBody,
  PostBlogsResponseSuccess,
  PostBlogsResponseFailure,
} from './backend.service.i';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  private get endPointApi() {
    return 'https://mock-api.nals.vn/api/v2';
  }

  public getBlogs(params?: GetBlogsRqParam): Observable<GetBlogsReponse> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    const paramsObj = new HttpParams({
      fromObject: {
        ...params,
      },
    });

    return this.httpClient.get<GetBlogsReponse>(endPoint, {
      params: paramsObj,
    });
  }

  public getBlogDetail(id: number): Observable<ItemsBlogReponse[]> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;

    return this.httpClient.get<ItemsBlogReponse[]>(endPoint);
  }

  public postBlog(
    body: PostPutBlogBody
  ): Observable<PostBlogsResponseSuccess | PostBlogsResponseFailure> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    return this.httpClient.post<
      PostBlogsResponseSuccess | PostBlogsResponseFailure
    >(endPoint, body);
  }

  public putBlog(
    id: number,
    body: PostPutBlogBody
  ): Observable<PostBlogsResponseSuccess | PostBlogsResponseFailure> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.put<
      PostBlogsResponseSuccess | PostBlogsResponseFailure
    >(endPoint, body);
  }

  public deleteBlog(id: number): Observable<null> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.delete<null>(endPoint);
  }
}
