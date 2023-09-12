import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../redux/actions/postActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Addpost from './Addpost';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  // const { posts } = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Home Feed</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      <Addpost />
      <div className='posts'>
        <Row justify='left'>
          <Col lg={12}>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </Col>
        </Row>
      </div>
    </section>
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
