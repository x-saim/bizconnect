// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { userReducer } from './redux/reducers/userReducer';
// import { alertsReducer } from './redux/reducers/alertsReducer';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';

// const rootReducer = combineReducers({
//   userReducer: userReducer,
//   alertsReducer: alertsReducer,
// });

//const composeEnhancers = composeWithDevTools({});

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
