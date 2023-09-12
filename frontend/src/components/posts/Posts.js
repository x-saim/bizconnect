import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../redux/actions/postActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  //const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Row justify='center'>
      <Col lg={12}>
        {posts.map((post) => {
          return <PostItem post={post} />;
        })}
      </Col>
    </Row>
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
