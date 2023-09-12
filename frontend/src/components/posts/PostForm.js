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
  const [charCount, setCharCount] = useState(0);

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

  return (
    <>
      <div className='post-form'>
        <form
          className='form my-1'
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            setText('');
          }}
        >
          <div className='bg-primary p'>
            <h3>Add a new post!</h3>
          </div>
          <textarea
            name='text'
            cols='30'
            rows='3'
            placeholder='Description'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            wrap='soft'
            style={{ maxHeight: '200px', overflowY: 'auto' }}
            maxLength={200}
          />

          <Form.Item name='image' label='Image'>
            <Input type='file' onChange={handleImageFileInput} />
          </Form.Item>
          {image !== '' && <img src={image} height='200' width='200' />}

          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
    </>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
