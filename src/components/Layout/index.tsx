import React from 'react';
import { Button, Layout, PageHeader, Typography } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import { DATA } from '../../data';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const PageLayout = () => {
  let navigate = useNavigate();

  const addPostHandler = () => {
    navigate('posts/new');
  };
  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title='POSTS'
        subTitle='NERO social'
        extra={[
          <Button key='1' type='primary' onClick={addPostHandler}>
            Add new post
          </Button>,
        ]}
      />
      <Content className='app-content'>
        <div className='container'>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};
