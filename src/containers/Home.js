// venue listing
import { Button } from 'antd';
import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <a href='/login'>
        <Button>login</Button>
      </a>
      <a href='/register'>
        <Button>Register</Button>
      </a>
    </div>
  );
};

export default Home;
