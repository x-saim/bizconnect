import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  //dispatch type, we return state array with payload with new alert
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //removes all alerts except the one that matches the payload
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
