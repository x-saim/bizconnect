import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

import PostItem from './PostItem';
import { getPosts } from '../../redux/actions/postActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Addpost from './Addpost';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <h1 className='large text-primary'>Home Feed</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>

      <Addpost />

      <Row justify='center'>
        <Col lg={12}>
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return <PostItem post={post} key={post._id} />;
            })
          ) : (
            <p>No posts available.</p>
          )}
        </Col>
      </Row>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.postReducer,
});

export default connect(mapStateToProps, { getPosts })(Posts);
