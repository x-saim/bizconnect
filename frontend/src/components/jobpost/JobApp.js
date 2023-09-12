import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { applyForJob } from '../../redux/actions/jobpostActions';

const JobApp = ({ applyForJob }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    file: null,
  });

  const { firstname, lastname, email, file } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('file', file);

    // Call the action to submit the application
    applyForJob(id, formData);
  };

  return (
    <Container className='container'>
      <Typography variant='h4' gutterBottom>
        Job Application
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label='First Name'
          variant='outlined'
          name='firstname'
          value={firstname}
          onChange={onChange}
          required
          fullWidth
          margin='normal'
        />
        <TextField
          label='Last Name'
          variant='outlined'
          name='lastname'
          value={lastname}
          onChange={onChange}
          required
          fullWidth
          margin='normal'
        />
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          required
          fullWidth
          margin='normal'
        />
        <input
          type='file'
          accept='.pdf,.doc,.docx'
          onChange={onFileChange}
          style={{ display: 'none' }}
          id='file-upload'
        />
        <label htmlFor='file-upload'>
          <Button variant='outlined' component='span' fullWidth margin='normal'>
            Upload Resume
          </Button>
        </label>
        <Typography variant='body2' color='textSecondary' gutterBottom>
          Accepted file formats: .pdf, .doc, .docx
        </Typography>
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Submit Application
        </Button>
      </form>
    </Container>
  );
};

JobApp.propTypes = {
  applyForJob: PropTypes.func.isRequired,
};

export default connect(null, { applyForJob })(JobApp);
