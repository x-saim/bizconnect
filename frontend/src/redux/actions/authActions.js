import axios from 'axios';
import { REGISTER_SUCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alertActions';

//Register user
export const register =
  ({ firstname, lastname, email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({ firstname, lastname, email, password });

    try {
      const res = await axios.post('/api/users', body);
      dispatch({
        type: REGISTER_SUCESS,
        payload: res.data, //data we get back is a token
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
