// venue listing
import { Button } from 'antd';
import React from 'react';
import CustomLayout from '../components/layout';

const Home = () => {
  return (
    <CustomLayout>
      Home
      <a href='/login'>
        <Button>login</Button>
      </a>
      <a href='/register'>
        <Button>Register</Button>
      </a>
    </CustomLayout>
  );
};

export default Home;
