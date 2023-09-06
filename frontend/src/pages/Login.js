import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userActions';

function Login() {
  const dispatch = useDispatch();

  function login(values) {
    console.log(values);
    dispatch(userLogin(values));
  }

  return (
    <div>
      <h1>Login page</h1>

      <Form onFinish={login}>
        <Form.Item
          label='username'
          name='username'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='password'
          name='password'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Button htmlType='submit'>Login</Button>

        <Link to='/register'>Not registered, click here to register</Link>
      </Form>
    </div>
  );
}

export default Login;
