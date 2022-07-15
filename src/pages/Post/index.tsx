import { Avatar, Button, List, Space } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TPost } from '../../@types/TPost';

import moment from 'moment';

import { PostsContext } from '../../contexts/PostsContext';
import { ChangePost } from '../ChangePost';

export const Post: React.FC = () => {
  const [changed, setChanged] = useState(false);

  const { postId } = useParams();
  const { getPost } = useContext(PostsContext);
  let navigate = useNavigate();

  let post: TPost | undefined;

  if (getPost && postId) {
    post = getPost(+postId);
  }

  const deleteHandler = (id: number) => {
    axios
      .delete(`${process.env.REACT_APP_POSTS_API}/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeHandler = (id: number) => {
    console.log(id);
    setChanged(true);
  };

  const closeChangeHandler = () => {
    setChanged(false);
  };

  return (
    <>
      {!changed
        ? post && (
            <List.Item className='post'>
              <List.Item.Meta avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />} title={<div>posted at: {moment(post.created).format('DD/MM/YY')}</div>} description={post.content} />
              <Space>
                <Button onClick={() => changeHandler(post!.id)} type='primary'>
                  Change
                </Button>
                <Button onClick={() => deleteHandler(post!.id)}>Delete</Button>
              </Space>
            </List.Item>
          )
        : post && <ChangePost post={post} onClose={closeChangeHandler} />}
    </>
  );
};
