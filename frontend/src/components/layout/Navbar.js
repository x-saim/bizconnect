import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/authActions';

const MyNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <Nav.Link as={Link} to='/about'>
        About
      </Nav.Link>
      <Nav.Link as={Link} to='/home'>
        Home Feed
      </Nav.Link>
      <Nav.Link as={Link} to='/jobs'>
        Job Posts
      </Nav.Link>

      <Nav.Link as={Link} to='/profiles'>
        Profiles
      </Nav.Link>

      <Nav.Link as={Link} to='/dashboard'>
        <i className='fas fa-user' /> Dashboard
      </Nav.Link>

      <Nav.Link as={Link} to='/login' onClick={logout}>
        Logout
      </Nav.Link>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link as={Link} to='/about'>
        About
      </Nav.Link>
      <Nav.Link as={Link} to='/register'>
        Register
      </Nav.Link>
      <Nav.Link as={Link} to='/login'>
        Login
      </Nav.Link>
    </>
  );

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>
        <Link to='/'>
          <i class='fa-solid fa-globe'></i>
          BizConnect
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {!loading && (isAuthenticated ? authLinks : guestLinks)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.userReducer,
});

export default connect(mapStateToProps, { logout })(MyNavbar);
