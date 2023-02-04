import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { headerMenus } from '../../constants/index';
const { Header, Content, Footer } = Layout;

const CustomLayout = ({ children }) => {
  const navigate = useNavigate();
  const [activeKeys, setActiveKeys] = useState('home');
  const handleClick = (e) => {
    setActiveKeys(e.key);
    navigate(e.item.props.link);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu
          onClick={handleClick}
          theme='dark'
          mode='horizontal'
          selectedKeys={activeKeys}
          items={headerMenus}
        />
      </Header>
      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};
export default CustomLayout;
