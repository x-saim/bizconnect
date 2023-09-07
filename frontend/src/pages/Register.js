import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

function Register() {
  const dispatch = useDispatch();

  function register(values) {
    console.log(values);
    // delete values.cpassword;
    dispatch(userRegister(values));
  }

  return (
    <div>
      <h1>Register page</h1>

      <Form onFinish={register}>
        <Form.Item
          label='name'
          name='name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='email'
          name='email'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='password'
          name='password'

          rules={[{ required: true }]}
        >
          <Input type='password'/>
        </Form.Item>

        <Button htmlType='submit'>Register</Button>
        <br/><br/>
        <Link to='/login'>Already registered, click here to login</Link>
      </Form>
    </div>
  );
}

export default Register;
