import React from 'react';
//import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from 'react-router-dom';

//Page Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import JobPosts from './components/jobposts/JobPosts';
import Addpost from './components/posts/Addpost';

//Layout Components
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

//Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <>
            <Navbar />
            <section className='container'>
              <Alert />
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/jobposts' element={<JobPosts />} />
                <Route path='/addpost' element={<Addpost />} />

                {/* The following will become protected routes */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profiles' element={<Profiles />} />
                <Route path='/profile/:id' element={<Profile />} />

                {/* The following are to be removed eventually */}
                {/* <ProtectedRoute path='/usersHome' element={<UsersHome />} /> */}
                {/* <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/job-board' element={<JobBoard />} /> */}
                {/* <Route path='/usersHome' element={<UsersHome />} /> */}
                {/* <Route
                path='/usersHome'
                element={
                  <ProtectedRoute>
                    <UsersHome />
                  </ProtectedRoute>
                }
              /> */}
              </Routes>
            </section>
          </>
        </Router>
      </div>
    </Provider>
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
