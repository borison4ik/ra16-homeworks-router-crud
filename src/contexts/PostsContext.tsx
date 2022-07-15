import { createContext } from 'react';
import { TPost } from '../@types/TPost';

type TPostsContext = {
  posts: TPost[];
  getPosts?(): void;
  getPost?(id: number): TPost | undefined;
};

export const PostsContext = createContext<TPostsContext>({
  posts: [],
});
