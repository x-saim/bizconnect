//MaterialUI
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//React Router
import { Link } from 'react-router-dom';

//State Management
import { useState } from 'react';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });
  const { firstname, lastname, email, password, password2 } = formData;

  //Can use this onChange for any field since we are using e.target.name
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log('Passwords do not match.');
    } else {
      console.log('Success');
      console.log(formData);

    //   const newUser = {
    //     firstname,
    //     lastname,
    //     email,
    //     password,
    //   };

    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     };

    //     //body obj to send
    //     const body = JSON.stringify(newUser);

    //     const res = await axios.post('/api/users', body, config);

    //     console.log(res.data);
    //   } catch (err) {}
    // }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={(e) => onSubmit(e)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstname'
                  required
                  fullWidth
                  id='firstname'
                  label='First Name'
                  autoFocus
                  value={firstname}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastname'
                  label='Last Name'
                  name='lastname'
                  autoComplete='family-name'
                  value={lastname}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password2'
                  label='Confirm Password'
                  type='password'
                  id='password2'
                  autoComplete='new-password'
                  value={password2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              value='Register'
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to='/login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
