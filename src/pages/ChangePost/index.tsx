import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TPost } from '../../@types/TPost';
import { PostsContext } from '../../contexts/PostsContext';

type ChangePostProps = {
  post: TPost;
  onClose(): void;
};
export const ChangePost: React.FC<ChangePostProps> = ({ post, onClose }) => {
  const [form] = Form.useForm();

  let navigate = useNavigate();

  const onFinish = (values: any) => {
    axios
      .post(`${process.env.REACT_APP_POSTS_API}`, { id: post.id, ...values })
      .then((response) => {
        console.log('POST NEW POST', response);
      })
      .catch((error) => console.log(error))
      .then(() => {
        navigate('/');
      });
  };

  const closeHandler = () => {
    onClose();
  };

  useEffect(() => {
    form.setFieldsValue({ content: post.content });
  }, []);

  return (
    <>
      {post && (
        <Form form={form} layout='vertical' name='nest-messages' onFinish={onFinish}>
          <Form.Item name='content' label='Change message'>
            <Input.TextArea required />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
              <Button onClick={closeHandler}>Close</Button>
            </Space>
          </Form.Item>
        </Form>
      )}
    </>
  );
};
