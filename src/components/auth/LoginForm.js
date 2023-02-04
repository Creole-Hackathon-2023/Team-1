//user login form
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '.././../styles/global.scss';
import { useNavigate } from 'react-router-dom';
import { user } from '../../fakeDb/user';
const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const isUser = user.filter(
      (item) => item.email === values.email && item.password === values.password
    );
    if (isUser.length > 0) {
      localStorage.setItem('token-sport', 'user-token');
      navigate('/');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='illustration-wrapper'>
          <img
            src='https://media.istockphoto.com/id/1141191007/vector/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-silhouettes-run-soccer.jpg?s=612x612&w=0&k=20&c=SEabW4SHZ7blMHJPxZNSTl_anOMHO3whQI7HIMxFpSg='
            alt='Login'
          />
        </div>
        <Form
          name='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className='form-title'>Login Here</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder='Password' />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            {/* <Checkbox>Remember me</Checkbox> */}
            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              LOGIN
            </Button>
            Or <a href='/register'>register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
