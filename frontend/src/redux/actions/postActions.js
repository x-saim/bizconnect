import axios from 'axios';
// import { message } from 'antd';
import { setAlert } from './alertActions';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

// export const addPost = (values) => async (dispatch) => {
//   // values.user = JSON.parse(localStorage.getItem('token'))._id
//   // values.user = JSON.parse(localStorage.getItem('user'))._id
//   values.likes = [];
//   values.comments = [];

//   dispatch({ type: 'LOADING', payload: true });

//   try {
//     await axios.post('/api/posts/addpost', values);
//     dispatch({ type: 'LOADING', payload: false });
//     message.success('Post added successfully');
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: 'LOADING', payload: false });
//     message.error('something went wrong');
//   }
// };

// export const getAllPosts = () => async (dispatch) => {
//   dispatch({ type: 'LOADING', payload: true });

//   try {
//     const response = await axios.get('/api/posts/getallposts');
//     dispatch({ type: 'LOADING', payload: false });
//     dispatch({ type: 'GET_ALL_POSTS', payload: response.data });
//     message.success('got all posts successfully');
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: 'LOADING', payload: false });
//     message.error('something went wrong');
//   }
// };

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/publicposts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get post

//Delete post
