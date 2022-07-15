import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLayout } from './components/Layout';
import { Posts } from './pages/Posts';
import { Post } from './pages/Post';
import { CreatePost } from './pages/CreatePost';

import { PostsProvider } from './contexts/PostsProvider';

import './app.scss';

function App() {
  return (
    <>
      <PostsProvider>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Posts />} />
            <Route path='/posts/:postId' element={<Post />} />
            <Route path='/posts/new' element={<CreatePost />} />
            <Route path='*' element={<Posts />} />
          </Route>
        </Routes>
      </PostsProvider>
    </>
  );
}

export default App;
