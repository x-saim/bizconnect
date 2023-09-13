import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  LikeOutlined,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import {
  likePost,
  unlikePost,
  deletePost,
} from '../../redux/actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostItem2({
  likePost,
  unlikePost,
  deletePost,
  auth,
  post: {
    _id,
    description,
    image,
    date,
    likes,
    comments,
    avatar,
    firstname,
    lastname,
    user,
  },
}) {
  const formattedDate = moment(date).fromNow();

  return (
    <article>
      <header>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <Link to={`/profile/${user}`}>
              <img
                className='round-img'
                src={avatar}
                alt='profile-pic'
                style={{ height: '50px', width: '50px' }}
              />
            </Link>
            <div className='ml-2'>
              <Link className='postitem-user-name'>
                {firstname} {lastname}
              </Link>
              <div>
                <span className='time'>{formattedDate}</span>
              </div>
            </div>
          </div>
          <div className='postitem-user-name'>
            <EditOutlined className='mr' />
            <DeleteOutlined />
          </div>
        </div>
      </header>

      <p className='description'>{description}</p>
      {image && <img src={image} alt='post image' />}

      <footer className='d-flex mt footerfontsize'>
        {likes !== null && (
          <div className='d-flex mr'>
            <LikeOutlined />
            {likes.length > 0 && <p className='ml'>{likes.length}</p>}
          </div>
        )}
        {comments !== null && (
          <div className='d-flex'>
            <CommentOutlined />
            {comments.length > 0 && <p className='ml'>{comments.length}</p>}
          </div>
        )}
      </footer>
    </article>
  );
}
PostItem2.propTypes = {
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
  PostItem2
);
