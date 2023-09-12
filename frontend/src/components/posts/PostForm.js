import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/postActions';
import { Col, Row, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

const { TextArea } = Input;

const PostForm = ({ addPost }) => {
  const [image, setimage] = useState('');
  const [text, setText] = useState('');

  //Image Upload Handler
  function handleImageFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // get Base64 string & set state
      setimage(reader.result);
    };
  }

  const handleFormSubmit = (values) => {
    addPost({ text: values.text });
    setText('');
  };

  return (
    <Row justify='left'>
      <Col lg={12}>
        <Form
          className='mt fontsize'
          layout='vertical'
          onFinish={handleFormSubmit}
        >
          <h3>Add new post</h3>
          <Form.Item name='text' label='Description'>
            <TextArea onChange={(e) => setText(e.target.value)} />
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
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
