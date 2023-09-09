import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/actions/userActions';

function Register() {
  const dispatch = useDispatch();

  function register(values) {
    console.log(values);
    // delete values.cpassword;
    dispatch(userRegister(values));
  }

  return (
    <div>
      <Row justify='center'>
        <Col lg={12}>
          <Form onFinish={register} className='form'>
            <h1>Registration</h1>
            <br />
            <Form.Item
              label='firstname'
              name='firstname'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='lastname'
              name='lastname'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

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

            <Form.Item
              label='password'
              name='password2'
              rules={[{ required: true }]}
            >
              <Input type='password' />
            </Form.Item>

            <Button htmlType='submit'>Register</Button>
            <br />
            <br />
            <Link to='/login'>Already registered, click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
