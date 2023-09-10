import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { alertReducer } from './reducers/alertReducer';
import { profileReducer } from './reducers/profileReducer';
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
  userReducer,
  alertReducer,
  profileReducer,
  postsReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: rootReducer })

export default store;
