import axios from 'axios';
import { message } from 'antd';

export const addPost = (values) => async (dispatch) => {

  // values.user = JSON.parse(localStorage.getItem('token'))._id
  // values.user = JSON.parse(localStorage.getItem('user'))._id
  values.likes = []
  values.comments = []

  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/posts/addpost', values);
    dispatch({ type: 'LOADING', payload: false });
    message.success('Post added successfully');
    
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error('something went wrong');
  }
};


export const getAllPosts = () => async (dispatch) => {

  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('/api/posts/getallposts');
    dispatch({ type: 'LOADING', payload: false });
    dispatch({type: 'GET_ALL_POSTS', payload: response.data})
    message.success('got all posts successfully');
    
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error('something went wrong');
  }
};