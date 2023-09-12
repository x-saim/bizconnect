import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/postActions';
import { Form, Input, Button } from 'antd';

const PostForm = ({ addPost }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  //Image Upload Handler
  function handleImageFileInput(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader(file);

      reader.readAsDataURL(file);

      // Create a new FormData object
      reader.onloadend = () => {
        const formData = new FormData();
        formData.append('image', file); // Set the 'image' field with the selected file
        setImage(formData);
      };
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append the 'text' and 'image' fields to the FormData object
    formData.append('text', text);
    if (image) {
      formData.append('image', image.get('image'));
    }

    addPost(formData);
    setText('');
    setImage(null);
  };

  return (
    <>
      <div className='post-form'>
        <form className='form my-1' onSubmit={handleSubmit}>
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
          {image && (
            <img
              src={URL.createObjectURL(image.get('image'))}
              height='100px'
              width='100px'
              alt='Uploaded'
            />
          )}

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
