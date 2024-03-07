export interface GetBlogDetailSuccess {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface FailedReason {
  code?: number;
  reason?: string;
}

export interface GetBlogDetailFailure {
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
