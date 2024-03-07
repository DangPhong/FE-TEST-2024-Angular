import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  GetBlogsResponse as GetBlogsResponse,
  GetBlogsRqParam,
  ItemsBlogResponse,
  PostPutBlogBody,
  PostBlogsResponseSuccess,
  BlogResponseFailure,
} from './backend.service.i';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  private get endPointApi() {
    return 'https://mock-api.nals.vn/api/v2';
  }

  public getBlogs(params?: GetBlogsRqParam): Observable<any> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    const paramsObj = new HttpParams({
      fromObject: {
        ...params,
      },
    });
    return of({
      data: {
        items: [
          {
            id: 888,
            title: 'title 1',
            content: 'content1',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-03-07T04:34:33.478Z',
            updated_at: '2024-03-07T04:34:33.478Z',
          },
          {
            id: 887,
            title: 'title 1',
            content: 'content1',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-03-07T04:28:16.638Z',
            updated_at: '2024-03-07T04:28:16.638Z',
          },
          {
            id: 886,
            title: 'Title ',
            content:
              'Have you ever shared a link to a web search before? Or to a search on your favorite e-commerce site? The reason this works is that these URLs encode the search parameters — usually in the form of query parameters. In this article, we’ll discover when and why you should care about this and how this can be implemented in Angular.\r\nFor example, take a look at duckduckgo.com. When you change the search filters such as whether you want results from the past day, week or month, you can observe a (somewhat mysterious) df parameter in the URL change its value. Likewise, if you take the URL and paste it into a new tab, you’ll see that the dropdown is populated with the corresponding value.',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706604776/qhobprum1j9xfhrng7z6.jpg',
            },
            created_at: '2024-01-30T08:52:56.467Z',
            updated_at: '2024-01-30T08:52:56.467Z',
          },
          {
            id: 885,
            title: 'Title',
            content:
              'Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he\'s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs. With his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash\'s agonizing past will be unraveled and his morality and principles pushed to the breaking point. ',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706602914/fueer19hhzku0agycite.jpg',
            },
            created_at: '2024-01-30T08:21:54.339Z',
            updated_at: '2024-01-30T08:21:54.339Z',
          },
          {
            id: 884,
            title: 'title',
            content: 'content\r\ncontent\r\ncontent\r\ncontent\r\ncontent',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706597978/qyrs6oulvyltmfy681hm.png',
            },
            created_at: '2024-01-30T06:59:38.412Z',
            updated_at: '2024-01-30T06:59:38.412Z',
          },
          {
            id: 883,
            title: 'title',
            content: 'content',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706596998/gcmtjry9srjuyxst7vdx.jpg',
            },
            created_at: '2024-01-30T06:43:18.691Z',
            updated_at: '2024-01-30T06:43:18.691Z',
          },
          {
            id: 882,
            title: 'Rước tài lộc cả năm với loạt phụ kiện đậm ‘chất’',
            content:
              'điện thoại là một trong những item bất ly thân của người trẻ mỗi khi ra đường. Chiếc ốp điện thoại thần tài là hiện thân cho sự may mắn luôn song hành cùng người dùng trong mỗi bước đi. Vì thế, không có lý do gì để không thay áo mới cho “dế cưng” trước Tết này.\r\nKhông chỉ là phụ kiện bảo vệ tai nghe khỏi trầy xước mỗi khi rớt dọc đường, chiếc case này còn giúp bạn vui vẻ và sảng khoái tinh thần nhờ hình ảnh chú mèo béo tròn cười tít mắt.',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706266522/etequuzbsxarxfm2jcel.jpg',
            },
            created_at: '2024-01-26T10:55:22.211Z',
            updated_at: '2024-01-26T10:55:22.211Z',
          },
          {
            id: 881,
            title: '222',
            content: '22212',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706265231/do4xifzjrbsvhllldbgi.jpg',
            },
            created_at: '2024-01-26T10:33:50.947Z',
            updated_at: '2024-01-26T10:33:50.947Z',
          },
          {
            id: 880,
            title: 'new blog title tet with image',
            content: 'new blog content tet with image',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706265020/pvunn8kxbyfmqguaeemb.jpg',
            },
            created_at: '2024-01-26T10:30:20.472Z',
            updated_at: '2024-01-26T10:30:20.472Z',
          },
          {
            id: 879,
            title: 'test new blog title tet',
            content: 'test new blog content tet',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-01-26T10:20:37.974Z',
            updated_at: '2024-01-26T10:20:37.974Z',
          },
          {
            id: 878,
            title: 'test new blog title',
            content: 'test new blog content',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-01-26T10:19:36.203Z',
            updated_at: '2024-01-26T10:19:36.203Z',
          },
          {
            id: 877,
            title: 'My Blog',
            content: 'My Blog Content',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1706263283/lkecaznvpbic293mubn9.jpg',
            },
            created_at: '2024-01-26T10:01:23.405Z',
            updated_at: '2024-01-26T10:01:23.405Z',
          },
          {
            id: 876,
            title: 'My Blog',
            content: 'My Blog Content',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-01-24T10:31:25.918Z',
            updated_at: '2024-01-24T10:31:25.918Z',
          },
          {
            id: 875,
            title: 'My Blog',
            content: 'My Blog Content',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2024-01-22T06:25:00.410Z',
            updated_at: '2024-01-24T04:18:29.426Z',
          },
          {
            id: 874,
            title: 'My Blog 111',
            content: 'My Blog Content 111',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2023-07-14T02:58:20.120Z',
            updated_at: '2023-07-14T02:58:20.120Z',
          },
          {
            id: 873,
            title: 'My Blog',
            content: 'My Blog Content',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2023-05-30T08:06:12.124Z',
            updated_at: '2023-05-30T08:06:12.124Z',
          },
          {
            id: 872,
            title: 'dfdf',
            content: '# Hello World\r\nasdfsdf\r\nasdf',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1684230089/xvtxputm6jes08icrhvt.jpg',
            },
            created_at: '2023-05-16T09:41:29.476Z',
            updated_at: '2023-05-16T09:41:29.476Z',
          },
          {
            id: 871,
            title: '2',
            content: '2',
            comments_count: 0,
            image: {
              url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1682846870/xcow1mmvzunoa4ufw2am.png',
            },
            created_at: '2023-04-26T08:23:39.578Z',
            updated_at: '2023-04-30T09:27:49.898Z',
          },
          {
            id: 870,
            title: 'saffs',
            content: 'safafs',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2023-04-25T03:47:05.553Z',
            updated_at: '2023-04-25T03:47:05.553Z',
          },
          {
            id: 868,
            title: 'fdgf',
            content: 'fgdgfd',
            comments_count: 0,
            image: {
              url: 'https://mock-api.nals.vn/images/fallback/default.png',
            },
            created_at: '2023-04-25T03:43:53.735Z',
            updated_at: '2023-04-25T03:43:53.735Z',
          },
        ],
      },
      pagination: {
        count: 113,
        page: 1,
        offset: 20,
        total: 6,
        prev: null,
        next: 2,
      },
    });
    return this.httpClient.get<GetBlogsResponse>(endPoint, {
      params: paramsObj,
    });
  }

  public getBlogDetail(id: number): Observable<ItemsBlogResponse> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.get<ItemsBlogResponse>(endPoint);
  }

  public upsertBlog(
    id: number,
    body: PostPutBlogBody
  ): Observable<PostBlogsResponseSuccess> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    if (!!id) {
      return this.httpClient.put<PostBlogsResponseSuccess>(`blogs/${id}`, body);
    }
    return this.httpClient.post<PostBlogsResponseSuccess>(endPoint, body);
  }

  public deleteBlog(id: number): Observable<null> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.delete<null>(endPoint);
  }
}
