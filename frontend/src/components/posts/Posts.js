import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const Posts = () => {

  const { posts } = useSelector(state => state.postsReducer)

  return (
   
    <Row justify='center'> 
      <Col lg={12}>
        {posts.map(post => {
          return <PostItem post={post}/>
        })}
      </Col>
    </Row>

  )
};

export default Posts;
