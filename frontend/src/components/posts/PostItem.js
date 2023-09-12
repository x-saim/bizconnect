// import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  likePost,
  unlikePost,
  deletePost,
} from '../../redux/actions/postActions';

// import {
//   LikeOutlined,
//   CommentOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from '@ant-design/icons';

//React-FB

const dummyUser = {
  firstname: 'Geroge',
};

const PostItem = ({
  likePost,
  unlikePost,
  deletePost,
  auth,
  post: { _id, text, firstname, lastname, avatar, user, likes, comments, date },
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>
            {firstname} {lastname}
          </h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>Posted on {date}</p>

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
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
    // <article>
    //   <header>
    //     <div class='d-flex justify-content-between'>
    //       <div>
    //         <span className='avatar'>{dummyUser.firstname[0]}</span>
    //         {/* <img src={post.user.avatar} alt='users avatar'/> */}
    //         <Link className='postitem-user-name'>{dummyUser.firstname}</Link>
    //         {/* <Link>{post.user.firstname}</Link> */}
    //         <div>
    //           <span className='time'>{moment(post.createdAt).fromNow()}</span>
    //         </div>
    //       </div>
    //       {/* if postitem created by logged in user then only will show the edit & delete icon. (need to implement this logic) */}
    //       <div className='postitem-user-name'>
    //         <EditOutlined className='mr' />
    //         <DeleteOutlined />
    //       </div>
    //     </div>
    //   </header>

    //   <p className='description'>{post.text}</p>
    //   {post.image && <img src={post.image} alt='post image' />}

    //   <footer className='d-flex mt footerfontsize'>
    //     <div className='d-flex mr'>
    //       <LikeOutlined />

    //       <p className='ml'>{post.likes.length}</p>
    //     </div>
    //     <div className='d-flex'>
    //       <CommentOutlined />
    //       <p className='ml'>{post.comments.length}</p>
    //     </div>
    //   </footer>
    // </article>
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
