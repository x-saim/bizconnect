import axios from 'axios';
import { message } from 'antd';

export const addPost = (values) => async (dispatch) => {

  values.user = JSON.parse(localStorage.getItem('user')).id
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