import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { BlogData } from './blogs.model';

export const blogsFeatureKey = 'blogs';

// States
export interface BlogsState {
  blogList: EntityState<BlogData>;
}

export const blogsAdapter: EntityAdapter<BlogData> = createEntityAdapter<BlogData>({
    sortComparer: false,
  });

export const initialState: BlogsState = {
    blogList: blogsAdapter.getInitialState()
}