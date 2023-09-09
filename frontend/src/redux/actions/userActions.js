import axios from 'axios';
import { message } from 'antd';

export const userRegister = (values) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/users', values);

    dispatch({ type: 'LOADING', payload: false });

    message.success('User registered successfully');

    window.location.href = '/login'; ////UPDATE TO HOME FEED /publicposts
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error('something went wrong');
  }
};

export const userLogin = (values) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.post('/api/auth', values);

    dispatch({ type: 'LOADING', payload: false });

    message.success('Login success');

    localStorage.setItem('user', JSON.stringify(response.data));

    window.location.href = '/publicposts'; //UPDATE TO HOME FEED /publicposts, should rename later
  } catch (error) {
    console.log(error);
    console.log(error.response.data.errors);
    dispatch({ type: 'LOADING', payload: false });
    message.error('Invalid credentials');
  }
};
