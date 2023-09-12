import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  LikeOutlined,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const dummyUser = {
  firstname: 'Geroge',
};

function PostItem({ post }) {
  return (
    <article>
      <header>
        <div class='d-flex justify-content-between'>
          <div>
            <span className='avatar'>{dummyUser.firstname[0]}</span>
            {/* <img src={post.user.avatar} alt='users avatar'/> */}
            <Link className='postitem-user-name'>{dummyUser.firstname}</Link>
            {/* <Link>{post.user.firstname}</Link> */}
            <div>
              <span className='time'>{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          {/* if postitem created by logged in user then only will show the edit & delete icon. (need to implement this logic) */}
          <div className='postitem-user-name'>
            <EditOutlined className='mr' />
            <DeleteOutlined />
          </div>
        </div>
      </header>

      <p className='description'>{post.text}</p>
      {post.image && <img src={post.image} alt='post image' />}

      <footer className='d-flex mt footerfontsize'>
        <div className='d-flex mr'>
          <LikeOutlined />
          <p className='ml'>{post.likes.length}</p>
        </div>
        <div className='d-flex'>
          <CommentOutlined />
          <p className='ml'>{post.comments.length}</p>
        </div>
      </footer>
    </article>
  );
}

export default PostItem;
