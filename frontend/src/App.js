import React from 'react';
//import Nav from './components/Nav';
import MyProfile from './pages/MyProfile';
import JobBoard from './pages/JobBoard';
import Welcome from './pages/Welcome';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UsersHome from './pages/UsersHome';

//Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';
//import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  // const { loading } = useSelector((state) => state.alertReducer);
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          {/* {loading && (
        <div className='spinner-border' role='status'>
          <span class='sr-only'>Loading...</span>
        </div>
      )} */}
          <Routes>
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/job-board' element={<JobBoard />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <ProtectedRoute path='/usersHome' element={<UsersHome />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

export const ProtectedRoute = (props) => {
  if (localStorage.getItem('user')) {
    return <Route {...props} />;
  } else {
    return <Navigate replace to='/login' />;
    // return <Redirect to='/login'/>
  }
};
