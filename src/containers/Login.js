import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import CustomLayout from '../components/layout';

const Login = () => {
  return (
    <CustomLayout>
      <div className='loginForm'>
        <LoginForm />
      </div>
    </CustomLayout>
  );
};

export default Login;
