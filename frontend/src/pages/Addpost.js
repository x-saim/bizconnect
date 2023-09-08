import React, { useState } from "react";
import { Col, Row , Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addPost } from "../redux/actions/postActions";

const {TextArea} = Input;

function Addpost() {

  const[image, setimage] = useState('');
  const dispatch = useDispatch()

  function handleImageFileInput(e) {
    const file = e.target.files[0]
    const reader = new FileReader(file)
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      // get Base64 string & set state
      setimage(reader.result)
    }
  }

  function addpost(values) {
    values.image = image
    console.log(values)
    dispatch(addPost(values))
  }

  return (
    <Row justify='center'>
      <Col lg={12}>

        <Form className='mt fontsize' layout='vertical' onFinish={addpost}>
          <h3>Add new post</h3>
          <Form.Item name='description' label='Description'>
            <TextArea/>
          </Form.Item>
          <Form.Item name='image' label='Image'>
            <Input type='file' onChange={handleImageFileInput}/>
          </Form.Item>

          {image !== '' && (<img src={image} height='200' width='200'/>)}
          <br/>
          <Button  htmlType='submit'>Post</Button>
        </Form>

      </Col>
    </Row>
  )
}

export default Addpost;