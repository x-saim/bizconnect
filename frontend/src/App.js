import React from 'react';
//import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

//Page Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import JobPosts from './components/jobposts/JobPosts';
import Posts from './components/posts/Posts';
import Addpost from './components/posts/Addpost';

//Layout Components
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { loadUser } from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';
import AboutPage from './components/layout/AboutPage';
import { EditProfile } from './components/dashboard/EditProfile';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //When App component mounts, useEffect will dispatch the loadUser action
  //Loads user data into the Redux store when the component mounts.
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <div className='App'>
          <Router>
            <>
              <Navbar />

              <Routes>
                <Route path='/' element={<Landing />} />
              </Routes>

              <section className='container'>
                <Alert />
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/about' element={<AboutPage />} />
                  {/* Need to convert the following into protected route eventually. */}
                  <Route path='/addpost' element={<Addpost />} />

                  {/* The following are protected routes */}

                  <Route
                    path='/dashboard'
                    element={<PrivateRoute component={Dashboard} />}
                  />
                  <Route />
                  <Route
                    path='/profiles'
                    element={<PrivateRoute component={Profiles} />}
                  />
                  <Route />
                  <Route
                    path='/profile/:id'
                    element={<PrivateRoute component={Profile} />}
                  />
                  <Route />
                  <Route
                    path='/jobs'
                    element={<PrivateRoute component={JobPosts} />}
                  />
                  <Route />
                  <Route
                    path='/home'
                    element={<PrivateRoute component={Posts} />}
                  />
                  <Route />
                  <Route
                    path='/edit-profile'
                    element={<PrivateRoute component={EditProfile} />}
                  />
                  <Route />

                  {/* The following are to be removed eventually */}

                  {/* <ProtectedRoute path='/usersHome' element={<UsersHome />} /> */}
                  {/* <Route path='/my-profile' element={<MyProfile />} />
              <Route path='/job-board' element={<JobBoard />} /> */}
                </Routes>
              </section>
            </>
          </Router>
        </div>
      </Provider>
    </LocalizationProvider>

  );
};

export default App;

// export const ProtectedRoute = (props) => {
//   if (localStorage.getItem('user')) {
//     return <Route {...props} />;
//   } else {
//     return <Navigate replace to='/login' />;
//     // return <Redirect to='/login'/>
//   }
// };
