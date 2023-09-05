import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UsersHome from './pages/UsersHome';
import { useSelector } from 'react-redux';

function App() {

  const { loading } = useSelector((state) => state.alertReducer);

  return (
    <div className="App">
      
      {loading && (<div className="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>)}

      <BrowserRouter>
        
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
    return <Route {...props}/>
  } else {
    return <Navigate replace to='/login'/>
    // return <Redirect to='/login'/>
  }
}
