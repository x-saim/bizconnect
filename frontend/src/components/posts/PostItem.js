import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  likePost,
  unlikePost,
  deletePost,
} from '../../redux/actions/postActions';

const PostItem = ({
  likePost,
  unlikePost,
  deletePost,
  auth,
  post: {
    _id,
    text,
    image,
    firstname,
    lastname,
    avatar,
    user,
    likes,
    comments,
    date,
  },
}) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');

  return (
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

        <p className='post-date'>Posted on {formattedDate}</p>

        <button
          type='button'
          className='btn btn-light'
          onClick={() => likePost(_id)} //_id is the postID
        >
          <i className='fas fa-thumbs-up' />{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          type='button'
          className='btn btn-light'
          onClick={() => unlikePost(_id)}
        >
          <i className='fas fa-thumbs-down' />
        </button>
        <Link to={`/publicposts/${_id}`} className='btn btn-primary'>
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => deletePost(_id)}
          >
            <i className='fas fa-times' /> Delete Post
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { likePost, unlikePost, deletePost })(
  PostItem
);
