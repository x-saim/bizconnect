import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Upload, Typography, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions/postActions';
// import { Grid, TextField, Button, Typography } from '@mui/material';
const { TextArea } = Input;

function Addpost() {
  const [image, setimage] = useState('');
  const dispatch = useDispatch();

  function handleImageFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // get Base64 string & set state

      setimage(reader.result);
    };
  }

  function createPost(values) {
    if (image !== '') {
      // Include image if one is selected
      values.image = image;
    } else {
      values.image = '';
    }

    dispatch(addPost(values));
  }

  return (
    <>
      <Row justify='center'>
        <Col lg={12}>
          <Card
            className='mt'
            title={
              <Typography.Title level={3}>Create New Post</Typography.Title>
            }
            style={{ border: '2px solid #333' }} // Darker border
          >
            <Form layout='vertical' onFinish={createPost}>
              <Form.Item name='text' label='Description'>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item name='image' label='Image'>
                <Input type='file' onChange={handleImageFileInput}></Input>
              </Form.Item>

              {image && (
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <img src={image} alt='Selected' height='200' width='200' />
                </div>
              )}
              <Button
                type='primary'
                htmlType='submit'
                style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }} // Custom button style
              >
                Post
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      {/* <Row justify='center'>
        <Col lg={12}>
          <Form className='mt fontsize' layout='vertical' onFinish={createPost}>
            <h3>Create New Post</h3>
            <Form.Item name='text' label='Description'>
              <TextArea />
            </Form.Item>
            <Form.Item name='image' label='Image'>
              <Input type='file' onChange={handleImageFileInput} />
            </Form.Item>

            {image !== '' && <img src={image} height='200' width='200' />}

            <Button htmlType='submit'>Post</Button>
          </Form>
        </Col>
      </Row> */}
    </>
  );
}

export default Addpost;
