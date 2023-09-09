import { REGISTER_SUCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'), //accessing token through vanilla JS
  isAuthenticated: null, //if sucess set to true, by default it is null.
  loading: true, //to track if data has been loaded
  user: null, //track user data, email, avatar, etc.
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCESS:
      localStorage.setItem('token', payload.token); //on sucess, we set the token
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false, //we've gotten the response and it's been loaded.
      };

    case REGISTER_FAIL:
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
