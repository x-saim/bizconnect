import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions/postActions';

const { TextArea } = Input;

function Addpost() {
  const [image, setimage] = useState('');
  // State to toggle image upload
  const [showImageUpload, setShowImageUpload] = useState(false);
  const dispatch = useDispatch();

  function handleImageFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result); // get Base64 string & set state
    };
  }

  function createPost(values) {
    if (image !== '') {
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
            style={{ border: '1px solid #333' }}
          >
            <Form layout='vertical' onFinish={createPost}>
              <Form.Item name='text' label='Description'>
                <TextArea rows={3} />
              </Form.Item>
              {showImageUpload && ( // Conditionally render the file upload input
                <Form.Item name='image' label='Image'>
                  <Input type='file' onChange={handleImageFileInput}></Input>
                </Form.Item>
              )}

              {image && (
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <img src={image} alt='Selected' height='200' width='200' />
                </div>
              )}
              <Button
                type='primary'
                htmlType='submit'
                style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
              >
                Post
              </Button>

              <Button
                type='default'
                onClick={() => setShowImageUpload(!showImageUpload)} // Toggle image upload visibility
                style={{ marginLeft: '10px' }}
              >
                {showImageUpload ? 'Cancel' : 'Add Image'}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Addpost;
