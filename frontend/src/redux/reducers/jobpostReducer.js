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
  jobposts: [],
  jobpost: null,
  loading: true,
  error: {},
};

export const jobpostReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBPOSTS:
      return {
        ...state,
        jobposts: payload,
        loading: false,
      };

    default:
      return state;
  }
};
