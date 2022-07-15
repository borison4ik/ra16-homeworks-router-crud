import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePost: React.FC = () => {
  let navigate = useNavigate();

  const onFinish = (values: any) => {
    axios
      .post(`${process.env.REACT_APP_POSTS_API}`, { id: 0, ...values })
      .then((response) => {
        console.log('POST NEW POST', response);
      })
      .catch((error) => console.log(error))
      .then(() => {
        navigate('/');
      });
  };

  const closeHandler = () => {
    navigate('/');
  };

  return (
    <Form layout='vertical' name='nest-messages' onFinish={onFinish}>
      <Form.Item name='content' label='New message'>
        <Input.TextArea required />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type='primary' htmlType='submit'>
            Send Message
          </Button>
          <Button onClick={closeHandler}>Close</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
