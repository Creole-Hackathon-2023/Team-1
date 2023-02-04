import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import CustomLayout from '../components/layout';

const Register = () => {
  return (
    <CustomLayout>
      <div className='loginForm'>
        <RegisterForm />
      </div>
    </CustomLayout>
  );
};

export default Register;
