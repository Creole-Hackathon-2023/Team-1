import { Menu } from 'antd';
import React from 'react';
import { headerMenus } from '../../constants';

const Header = () => {
  return (
    <Header>
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={headerMenus}
      />
    </Header>
  );
};

export default Header;
