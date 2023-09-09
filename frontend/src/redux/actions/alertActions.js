import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid'; // library to generate unique IDs

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = uuidv4();

    // Dispatch an action to set the alert
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    // Set a timeout to remove the alert after the specified duration (default set to 5s)
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
