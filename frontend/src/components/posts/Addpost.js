import React, { useState } from 'react';
import { Col, Row, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addPost2 } from '../../redux/actions/postActions';
import { addPost } from '../../redux/actions/postActions';
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
      // console.log(reader.result);
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

    // Dispatch the appropriate action (addPost or addPost2) based on your requirements
    dispatch(addPost(values));
  }

  return (
    <>
      <Row justify='center'>
        <Col lg={12}>
          <Form className='mt fontsize' layout='vertical' onFinish={createPost}>
            <h3>Add new post</h3>
            <Form.Item name='text' label='Description'>
              <TextArea />
            </Form.Item>
            <Form.Item name='image' label='Image'>
              <Input type='file' onChange={handleImageFileInput} />
            </Form.Item>

            {image !== '' && <img src={image} height='200' width='200' />}
            <br />
            <Button htmlType='submit'>Post</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Addpost;
