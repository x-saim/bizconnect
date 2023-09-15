import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJobPost } from '../../redux/actions/jobpostActions';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { setAlert } from '../../redux/actions/alertActions';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const JobPostForm = ({ addJobPost, auth }) => {
  const [formData, setFormData] = useState({
    title: '',
    logo: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    employmentType: 'Full-Time',
    salary: '',
    contactEmail: '',
  });

  const {
    title,
    company,
    description,
    requirements,
    location,
    employmentType,
    salary,
    contactEmail,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJobPost(formData);

    // Clear the form data
    setFormData({
      title: '',
      company: '',
      description: '',
      requirements: '',
      location: '',
      employmentType: '',
      salary: '',
      contactEmail: '',
    });

    // Show a success alert
    setAlert('Job Post Created', 'success');
  };

  return (
    <>
      <Container className='.container'>
        <div>
          {auth.isAuthenticated && auth.loading === false && auth.user._id && (
            <>
              <Link to='/jobposts' className='btn btn-dark'>
                Back to Job Board
              </Link>
            </>
          )}
        </div>
        <br />
        <Box sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h5'>Create a Job Post</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='normal'
                fullWidth
                id='title'
                label='Job Title'
                name='title'
                autoFocus
                value={title}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='normal'
                fullWidth
                id='company'
                label='Company'
                name='company'
                value={company}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                fullWidth
                id='description'
                label='Job Description'
                name='description'
                multiline
                rows={4}
                value={description}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                fullWidth
                id='requirements'
                label='Job Requirements'
                name='requirements'
                multiline
                rows={4}
                value={requirements}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='normal'
                fullWidth
                id='location'
                label='Location'
                name='location'
                value={location}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                labelId='employment-type-select'
                id='employment-type'
                name='employmentType'
                value={employmentType}
                onChange={onChange}
                fullWidth
                margin='normal'
              >
                <MenuItem value='Full-Time'>Full-Time</MenuItem>
                <MenuItem value='Part-Time'>Part-Time</MenuItem>
                <MenuItem value='Contract'>Contract</MenuItem>
                <MenuItem value='Freelance'>Freelance</MenuItem>
                <MenuItem value='Internship'>Internship</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='normal'
                fullWidth
                id='salary'
                label='Salary'
                name='salary'
                value={salary}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin='normal'
                fullWidth
                id='contactEmail'
                label='Contact Email'
                name='contactEmail'
                type='email'
                value={contactEmail}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                onClick={handleSubmit}
                fullWidth
                variant='contained'
                sx={{ mt: 3 }}
              >
                Create Job Post
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

JobPostForm.propTypes = {
  addJobPost: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Get the auth state
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { setAlert, addJobPost })(JobPostForm);
