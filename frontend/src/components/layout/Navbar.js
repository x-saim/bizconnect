// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='navbar bg-dark'>
//       <h1>
//         <Link to='/'>
//           <i className='fas fa-code'></i> BizConnect
//         </Link>
//       </h1>
//       <ul>
//         <li>
//           <Link to='/posts'>Posts</Link>
//         </li>
//         <li>
//           <Link to='/jobposts'>Job Posts</Link>
//         </li>

//         {/* <li>
//           <a onClick={logout} href='#!'>
//             <i className='fas fa-sign-out-alt' />{' '}
//             <span className='hide-sm'>Logout</span>
//           </a>
//         </li> */}
//         <li>
//           <Link to='/profiles'>Network</Link>
//         </li>
//         <li>
//           <Link to='/dashboard'>
//             <i className='fas fa-user' />{' '}
//             <span className='hide-sm'>Dashboard</span>
//           </Link>
//         </li>
//         <li>
//           <Link to='/register'>Register</Link>
//         </li>
//         <li>
//           <Link to='/login'>Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>
        <Link to='/'>
          <i className='fas fa-code'></i> BizConnect
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/posts'>
            Posts
          </Nav.Link>
          <Nav.Link as={Link} to='/jobposts'>
            Job Posts
          </Nav.Link>
          <Nav.Link as={Link} to='/profiles'>
            Network
          </Nav.Link>
          <Nav.Link as={Link} to='/dashboard'>
            <i className='fas fa-user' /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to='/register'>
            Register
          </Nav.Link>
          <Nav.Link as={Link} to='/login'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
