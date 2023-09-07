import axios from 'axios';
import { message } from 'antd';

export const userRegister = (values) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post('/api/users', values);
    dispatch({ type: 'LOADING', payload: false });
    message.success('User registered successfully');
    window.location.href = '/login';
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
    window.location.href = '/UsersHome';
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error('Invalid credentials');
  }
};
