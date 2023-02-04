import { Layout } from 'antd';
import React from 'react';
import Header from './Header';

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content> {children}</Content>
      <Footer />
    </Layout>
  );
};

export default CustomLayout;
