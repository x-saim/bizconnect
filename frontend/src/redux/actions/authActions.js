import axios from 'axios';
import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_FAIL,
} from './types';
import { setAlert } from './alertActions';
import setAuthToken from '../../utils/setAuthToken';

//Load User

//check to see if theres a token, if there is, add token to global header to always send in requests.
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth'); //routes/auth.js

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user
export const register =
  ({ firstname, lastname, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    const body = JSON.stringify({ firstname, lastname, email, password });

    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCESS,
        payload: res.data, //data we get back is a token
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors; //errors array from response

      if (errors) {
        //for each error occurance, a setAlert action will be exected and message will be displayed.
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCESS,
      payload: res.data, //data we get back is a token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors; //errors array from response

    if (errors) {
      //for each error occurance, a setAlert action will be exected and message will be displayed.
      errors.forEach((error) => dispatch(setAlert(error.message, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
