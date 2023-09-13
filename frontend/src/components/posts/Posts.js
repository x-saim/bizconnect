import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../redux/actions/postActions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Addpost from './Addpost';
import PostForm from './PostForm';
import PostItem2 from './PostItem2';
const Posts = ({ getPosts, post: { posts, loading } }) => {
  // const { posts } = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <h1 className='large text-primary'>Home Feed</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      {/* <PostForm /> */}
      <Addpost />

      <Row justify='center'>
        <Col lg={12}>
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return <PostItem2 post={post} key={post._id} />;
            })
          ) : (
            <p>No posts available.</p>
          )}
        </Col>
      </Row>
    </>

    // {/* <div className='posts'>
    //   {posts.map((post) => (
    //     <PostItem key={post._id} post={post} />
    //   ))}
    // </div> */}
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
