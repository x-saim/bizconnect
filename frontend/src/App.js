import React from 'react';
import Nav from './components/Nav';
import MyProfile from './pages/MyProfile';
import JobBoard from './pages/JobBoard';
import Welcome from './pages/Welcome';
import './index.css';
import { BrowserRouter, Route, Redirect, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UsersHome from './pages/UsersHome';

function App() {
  return (
    <div className='App'>
      {loading && (
        <div className='spinner-border' role='status'>
          <span class='sr-only'>Loading...</span>
        </div>
      )}

      <BrowserRouter>
        <Route path='/my-profile' element={<MyProfile></MyProfile>} />
        <Route path='/job-board' element={<JobBoard></JobBoard>} />
        <Route path='/' element={<Welcome></Welcome>} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <ProtectedRoute path='/usersHome' exact component={UsersHome} />
      </BrowserRouter>
    </div>
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
