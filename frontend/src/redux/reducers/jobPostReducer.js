// jobPostReducer.js
import {
  GET_JOBPOSTS,
  GET_JOBPOST,
  JOBPOST_ERROR,
  APPLY_JOB,
  GET_APPS,
  DELETE_JOBPOST,
  ADD_JOBPOST,
} from '../actions/types';

const initialState = {
  jobPosts: [],
  jobPost: null,
  loading: true,
  error: {},
  applications: {}, // Change applications from an array to an object
};

export const jobPostReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBPOSTS:
      return {
        ...state,
        jobPosts: payload,
        loading: false,
      };
    case GET_JOBPOST:
      return {
        ...state,
        jobPost: payload,
        loading: false,
      };
    case ADD_JOBPOST:
      return {
        ...state,
        jobPosts: [payload, ...state.jobPosts],
        loading: false,
      };
    case DELETE_JOBPOST:
      return {
        ...state,
        jobPosts: state.jobPosts.filter((post) => post._id !== payload),
        loading: false,
      };
    case APPLY_JOB:
      return {
        ...state,
        jobPost: {
          ...state.jobPost,
          applications: {
            ...state.jobPost.applications,
            [payload.applicantId]: payload.applicationData,
          },
        },
        loading: false,
      };
    case GET_APPS:
      return {
        ...state,
        applications: payload,
        loading: false,
      };
    case JOBPOST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
