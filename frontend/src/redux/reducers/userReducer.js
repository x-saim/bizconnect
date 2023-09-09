import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'), //accessing token through vanilla JS
  isAuthenticated: null, //if sucess set to true, by default it is null.
  loading: true, //to track if data has been loaded
  user: null, //track user data, email, avatar, etc.
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload, //payload includes user info except password.
      };

    case REGISTER_SUCESS:
    case LOGIN_SUCESS:
      localStorage.setItem('token', payload.token); //on sucess, we set the token
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false, //we've gotten the response and it's been loaded.
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token'); //remove token from localStorage
      return {
        ...state,
        token: null, //set token state value to null
        isAuthenticated: false,
        loading: false, //even though it failed, it still completed loading.
      };
    default:
      return state;
  }
};
