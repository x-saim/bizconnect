import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../redux/actions/postActions';
import moment from 'moment';
import { DeleteOutlined } from '@ant-design/icons';
const CommentItem = ({
  postId,
  comment: { _id, text, firstname, lastname, avatar, user, date },
  auth,
  deleteComment,
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
        <p className='my-1'>{text}</p>
        <p className='post-date'>Posted on {formattedDate}</p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <DeleteOutlined />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
