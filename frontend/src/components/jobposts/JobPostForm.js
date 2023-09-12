import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJobPost } from '../actions/jobPostActions';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { setAlert } from '../../redux/actions/alertActions';

const JobPostForm = ({ addJobPost }) => {
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
    logo,
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

  const onSubmit = (e) => {
    e.preventDefault();
    addJobPost(formData);

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
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h2'>Create a Job Post</Typography>
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
            <TextField
              margin='normal'
              fullWidth
              id='employmentType'
              label='Employment Type'
              name='employmentType'
              value={employmentType}
              onChange={onChange}
            />
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
              value={contactEmail}
              onChange={onChange}
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
    </>
    // <div className='job-post-form'>
    //   <h2>Create a Job Post</h2>
    //   <form onSubmit={onSubmit}>
    //     {/* Form inputs go here */}
    //     <button type='submit'>Submit</button>
    //   </form>
    // </div>
  );
};

JobPostForm.propTypes = {
  addJobPost: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

// Get the auth state
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, addJobPost })(JobPostForm);
