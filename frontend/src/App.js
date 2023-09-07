//import Nav from './components/Nav';
// import MyProfile from './pages/MyProfile';
// import JobBoard from './pages/JobBoard';
// import Welcome from './pages/Welcome';

// import Login from './pages/Login';
// import Register from './pages/Register';
// import UsersHome from './pages/UsersHome';

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from 'react-router-dom';

//Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

//Redux
import { Provider } from 'react-redux';
import store from '../src/store';

//import { useSelector } from 'react-redux/es/hooks/useSelector';

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>

        <section className='container'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </section>
      </>
    </Router>
  </Provider>
);

export default App;

// function App() {
//   // const { loading } = useSelector((state) => state.alertReducer);
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className='App'>
//           {/* {loading && (
//         <div className='spinner-border' role='status'>
//           <span class='sr-only'>Loading...</span>
//         </div>
//       )} */}
//           <Routes>
//             <Route path='/' element={<Welcome />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/register' element={<Register />} />
//             {/* <Route path='/my-profile' element={<MyProfile />} />
//             <Route path='/job-board' element={<JobBoard />} />
//             <ProtectedRoute path='/usersHome' element={<UsersHome />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// export const ProtectedRoute = (props) => {
//   if (localStorage.getItem('user')) {
//     return <Route {...props} />;
//   } else {
//     return <Navigate replace to='/login' />;
//     // return <Redirect to='/login'/>
//   }
// };
