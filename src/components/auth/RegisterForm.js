//user register form
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '.././../styles/global.scss';

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
          <p className='form-title'>Register Here</p>
          <p>Explore to the Venues</p>

          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='username'
            rules={[
              { required: true, message: 'Please input your mobile number!' },
            ]}
          >
            <Input placeholder='Mobile number' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder='Password' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              SIGN UP
            </Button>
            Or <a href='/login'>Login Here!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 16,
    //   }}
    //   style={{
    //     maxWidth: 600,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your username!",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your password!",
    //       },
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     label="Mobile Number"
    //     name="mobile"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your mobile no!",
    //       },
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item className="login-form-button">
    //     <Button type="primary" htmlType="submit" className="login-form-button">
    //       Sign Up
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

export default RegisterForm;
