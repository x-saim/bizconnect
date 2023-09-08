/*

http://localhost:5000/api/auth --- Login
It accepts POST requests and requires the user’s email and password as arguments. It then returns a JWT after successful authentication or an error message. This token has a current 100-hour lifespan for testing purposes - will be updated.


http://localhost:5000/api/users -- Register
Route accepts POST requests and requires the user’s first name, lastname, email, and password.

http://localhost:5000/api/auth?x-auth-token={token} -- Auth Route

It accepts GET requests and requires a token to fetch user details from the database. It returns the user’s object after successful authorization or an error message.
{
    "_id": "64f9167f30ef27deb2c8f60f",
    "firstname": "John",
    "lastname": "Doe",
    "email": "jdoe@gamil.com",
    "avatar": "//www.gravatar.com/avatar/3837f367dd74d87343cbb6308f84fa88?s=200&r=pg&d=mm",
    "date": "2023-09-07T00:17:03.761Z",
    "__v": 0
}
*/

//authActions.js

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:5000/';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/api/users`,
        { firstName, lastname, email, password },
        config
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
