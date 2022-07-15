import axios from 'axios';
import React, { useState } from 'react';
import { TPost } from '../@types/TPost';
import { PostsContext } from './PostsContext';

export const PostsProvider = (props: any) => {
  const [posts, setPosts] = useState<TPost[]>([]);

  const getPosts = (): void => {
    axios
      .get(`${process.env.REACT_APP_POSTS_API}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPost = (id: number) => {
    const post = posts.find((post) => post.id === id);

    return post;
  };

  return <PostsContext.Provider value={{ posts, getPosts, getPost }}>{props.children}</PostsContext.Provider>;
};
