import { GET_PROFILE, PROFILE_ERROR } from './types';

initialState = {
  profile: null, //holds profile info upon logging in, and user profile visited
  profiles: [], // for /profiles page
  loading: true,
  error: {}, //for any errors in the requests
};

export const profileReducer = (state = initialStae, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};