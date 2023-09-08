import React from 'react';
//import Nav from './components/Nav';
import MyProfile from './pages/MyProfile';
import JobBoard from './pages/JobBoard';
import Welcome from './pages/Welcome';
import './index.css';
import './App.css';
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
import Addpost from './pages/Addpost';

//Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  // const { loading } = useSelector((state) => state.alertReducer);
  return (
    <Provider store={store}>
    
        <div className='App'>
          {/* {loading && (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          )} */}
        <Router>
          <Routes>
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/job-board' element={<JobBoard />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/usersHome' element={<UsersHome />} />
            <Route path='/addpost' element={<Addpost />} />
            {/* <ProtectedRoute path='/usersHome' element={<UsersHome />} /> */}
            <Route path='/usersHome' element={<ProtectedRoute><UsersHome /></ProtectedRoute>}/>
          </Routes>
        </Router> 
        </div>
    
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