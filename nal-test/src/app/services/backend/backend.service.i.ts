// https://mock-api.nals.vn/api/v2

export interface GetBlogsRqParam {
  page?: string;
  offset?: string;
  search?: string;
  sort_by?: string;
  sort_direction?: string;
}

export interface ItemsBlogReponse {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface Pagination {
  count: number;
  page: number;
  offset: number;
  total: number;
  prev: number;
  next: number;
}

export interface GetBlogsReponse {
  data: {
    items: ItemsBlogReponse[];
  };
  pagination: Pagination;
}

// export interface GetBlogsRqBody {
//   data: {
//     items: {
//       email: string;
//       name: string;
//       avatar: { url: string };
//       created_at: string;
//       updated_at: string;
//     }[];
//     pagination: {
//       count: number;
//       page: number;
//       offset: number;
//       total: number;
//       prev: number;
//       next: number;
//     };
//   };
// }

export interface PostPutBlogBody {
  'blog[title]': string;
  'blog[content]': string;
  'blog[image]': string;

  //   blog: {
  //     title: string;
  //     content: string;
  //     image: string;
  //   };
}

export interface ItemsBlogPostBlogsResponseSuccess {
  id: number;
  title: string;
  content: string;
  comments_count: number;
  image: { url: string };
  created_at: string;
  updated_at: string;
}

export interface PostBlogsResponseSuccess {
  data: {
    items: ItemsBlogPostBlogsResponseSuccess[];
  };
}

export interface BlogResponseFailure {
  message: string;
  type: string;
  status: string;
  path: string;
  error_code: string;
  errors: {
    field: string;
    code: string;
    message: string;
  }[];
}
