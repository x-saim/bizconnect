import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_JOBPOSTS,
  GET_JOBPOST,
  JOBPOST_ERROR,
  APPLY_JOB,
  GET_APPS,
  DELETE_JOBPOST,
  ADD_JOBPOST,
} from './types';

// Get job posts
export const getJobPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/jobposts');

    dispatch({
      type: GET_JOBPOSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get job post by id
export const getJobPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/jobposts/${id}`);

    dispatch({
      type: GET_JOBPOST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Apply for a job
export const applyForJob = (jobPostId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/jobposts/apply/${jobPostId}`);

    dispatch({
      type: APPLY_JOB,
      payload: res.data,
    });

    dispatch(setAlert('Application submitted successfully.', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get job applications by job ID
export const getJobApplications = (jobPostId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/jobposts/applications/${jobPostId}`);

    dispatch({
      type: GET_APPS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete job post
export const deleteJobPost = (jobPostId) => async (dispatch) => {
  try {
    await axios.delete(`/api/jobposts/${jobPostId}`);

    dispatch({
      type: DELETE_JOBPOST,
      payload: jobPostId,
    });

    dispatch(setAlert('Job post deleted.', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create job post
export const addJobPost = (formData) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const res = await axios.post('/api/jobposts', formData, config);

    dispatch({
      type: ADD_JOBPOST,
      payload: res.data,
    });

    dispatch(setAlert('Job post created.', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
