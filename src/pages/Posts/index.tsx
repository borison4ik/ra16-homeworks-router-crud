import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, List } from 'antd';
import moment from 'moment';

import { PostsContext } from '../../contexts/PostsContext';

import './index.scss';

export const Posts: React.FC = () => {
  const { posts, getPosts } = useContext(PostsContext);
  console.log('posts', posts);

  useEffect(() => {
    if (getPosts) getPosts();
  }, []);

  return (
    <div className='posts'>
      <List
        itemLayout='horizontal'
        dataSource={posts}
        renderItem={(post) => (
          <List.Item className='post'>
            <List.Item.Meta avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />} title={<Link to={`posts/${post.id}`}>posted at: {moment(post.created).format('DD/MM/YY')}</Link>} description={post.content} />
          </List.Item>
        )}
      />
    </div>
  );
};
