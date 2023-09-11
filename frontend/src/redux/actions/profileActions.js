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

// create or update user's profile
export const createOrUpdateProfile = ({
  company,
  website,
  location,
  bio,
  status,
  skills,
  youtube,
  facebook,
  twitter,
  instagram,
  linkedin,
  github, }) => async (dispatch) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const body = JSON.stringify({ company, website, location, bio, status, skills, youtube, facebook, twitter, instagram, linkedin, github });

      const res = await axios.post('api/profile/', body, config)

      console.log(res)

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
  }

// Add Education
export const addEductionField = ({school, degree, fieldOfStudy, from, to, description}) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    const body = JSON.stringify({ school, degree, fieldOfStudy, from, to, description });

    const res = await axios.post('api/profile/education', body, config)

    console.log(res)

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
}

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
  console.log('Fetching profile for userID:', userID);
  try {
    const res = await axios.get(`/api/profile/user/${userID}`);
    console.log('URL:', res.config.url); // Log the URL being use
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
