import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';

function Login() {
  const dispatch = useDispatch();

  function login(values) {
    console.log(values);
    dispatch(userLogin(values));
  }

  return (
    <div>
      <Row justify='center'>
        <Col lg={12}>
          <Form onFinish={login} className='form'>
            <h1>Login page</h1>
            <br />
            <Form.Item label='email' name='email' rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='password'
              name='password'
              rules={[{ required: true }]}
            >
              <Input type='password' />
            </Form.Item>

            <Button htmlType='submit'>Login</Button>
            <br />
            <br />
            <Link to='/register'>Not registered, click here to register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
