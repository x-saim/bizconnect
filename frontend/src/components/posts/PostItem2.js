import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
  // EditOutlined,
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
    text,
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

  // const [liked, setLiked] = useState(
  //   likes.some((like) => like.user === auth.user._id)
  // );

  // const toggleLike = () => {
  //   if (liked) {
  //     unlikePost(_id);
  //   } else {
  //     likePost(_id);
  //   }
  //   setLiked(!liked);
  // };

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
            {/* <EditOutlined className='mr' /> */}
            {user === auth.user._id && (
              <DeleteOutlined onClick={() => deletePost(_id)} />
            )}
          </div>
        </div>
      </header>

      <p className='description'>{text}</p>
      {image && <img src={image} alt='post image' />}

      <footer className='d-flex mt footerfontsize'>
        <button
          type='button'
          className='btn btn-light'
          onClick={() => likePost(_id)}
        >
          <LikeOutlined />{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        {likes.length > 0 && (
          <button
            type='button'
            className='btn btn-light'
            onClick={() => unlikePost(_id)}
          >
            <DislikeOutlined />{' '}
          </button>
        )}

        <Link to={`/publicposts/${_id}`} className='btn btn-lightlight'>
          <CommentOutlined />
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {comments !== null && (
          <div className='d-flex'>
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
