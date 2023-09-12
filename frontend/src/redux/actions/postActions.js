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

//Get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/publicposts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
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

//Add like to post
export const likePost = (postID) => async (dispatch) => {
  try {
    console.log('Like action started');
    const res = await axios.put(`/api/publicposts/like/${postID}`);
    console.log('Like action completed');
    dispatch({
      type: UPDATE_LIKES,
      payload: { postID, likes: res.data },
    });
  } catch (err) {
    console.log('Like action error:', err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like from post
export const unlikePost = (postID) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/publicposts/unlike/${postID}`);
    console.log('post unliked');
    dispatch({
      type: UPDATE_LIKES,
      payload: { postID, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const res = await axios.post(`/api/publicposts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert('Post created!', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Delete post
export const deletePost = (postID) => async (dispatch) => {
  try {
    await axios.delete(`/api/publicposts/${postID}`);

    dispatch({
      type: DELETE_POST,
      payload: postID,
    });

    dispatch(setAlert('Post Removed!', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
