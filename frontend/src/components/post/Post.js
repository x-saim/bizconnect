import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../redux/actions/postActions';

const Post = ({ auth, getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  // Check if post is null or loading
  if (loading || post === null) {
    return <Spinner />;
  }

  const { _id, user, firstname, lastname, avatar, text, comments, date } = post;

  return (
    <>
      <div className='container'>
        <Link to='/publicposts' className='btn btn-dark'>
          Back To Posts
        </Link>
        <div className='post bg-white p-1 my-1'>
          <div className='avatar-container'>
            <Link to={`/profile/${user}`}>
              <img
                className='round-img'
                src={avatar}
                alt='profile-pic'
                style={{ height: '100px', width: '100px' }}
              />
            </Link>
            <h4>
              {firstname} {lastname}
            </h4>
          </div>

          <div>
            <div className='text-container'>
              {' '}
              <div>
                <p className='my-1 text-overflow'>{text}</p>{' '}
              </div>
            </div>

            <p className='post-date'>Posted on {date}</p>
          </div>
        </div>
      </div>
      <CommentForm postId={_id} />

      <div className='comments'>
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.postReducer,
});

export default connect(mapStateToProps, { getPost })(Post);
