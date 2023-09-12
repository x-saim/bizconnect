import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { alertReducer } from './reducers/alertReducer';
import { profileReducer } from './reducers/profileReducer';
import { postReducer } from './reducers/postReducer';
import { jobpostReducer } from './reducers/jobpostReducer';

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  profileReducer,
  postReducer,
  jobpostReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: rootReducer })

export default store;
