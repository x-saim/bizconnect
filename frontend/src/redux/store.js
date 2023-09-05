import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { alertsReducer } from './reducers/alertsReducer';

const rootReducer = combineReducers({
  userReducer : userReducer,
  alertsReducer : alertsReducer
})

const composeEnhancers = composeWithDevTools({

});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// const store = configureStore({ 
//   reducer: rootReducer })

export default store;