import { setAlert } from './alertActions';
import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  CLEAR_PROFILE,
} from './types';

//Get current user's profile frrom api/profile/me
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors; //errors array from response

    if (errors) {
      //for each error occurance, a setAlert action will be exected and message will be displayed.
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });

  try {
    const res = await axios.get('api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors; //errors array from response

    if (errors) {
      //for each error occurance, a setAlert action will be exected and message will be displayed.
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get profile by id
export const getProfileByID = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`api/profile/user/${userID}`);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors; //errors array from response

    if (errors) {
      //for each error occurance, a setAlert action will be exected and message will be displayed.
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
