import { Typography } from '@mui/material';
// import BasicTable from "./EducationTable"
import ExperienceTable from './ExperienceTable';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { addExperienceField } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertActions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const AddExperience = ({ setAlert, addExperienceField, profile }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    description: '',
    // from: dayjs(''),
    // to: dayjs(''),
  });
  const [from, setFrom] = useState(dayjs(''));
  const [to, setTo] = useState(dayjs(''));

  // Destructure input values from formData
  const { company, title, location, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    addExperienceField({ company, title, location, from, to, description });
    setFormData((prev) => {
      return {
        ...prev,
        company: '',
        title: '',
        location: '',
        description: '',
      };
    });
    setAlert('Experience Added!', 'success');
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box sx={{}}>
        <Typography sx={{ marginY: '12px' }} variant='h5'>
          Add New Experience
        </Typography>
        <Grid
          direction='row'
          justifyContent='center'
          alignItems='center'
          container
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <TextField
              margin='normal'
              fullWidth
              id='company'
              label='Company'
              name='company'
              autoFocus
              value={company}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin='normal'
              fullWidth
              id='title'
              label='Title'
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
              id='location'
              label='Location'
              name='location'
              autoFocus
              value={location}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DatePicker
              label='From'
              fullWidth
              margin='normal'
              value={from}
              onChange={(value) => setFrom(value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DatePicker
              label='To'
              fullWidth
              margin='normal'
              value={to}
              onChange={(value) => setTo(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-multiline-static'
              label='Description'
              name='description'
              multiline
              fullWidth
              rows={4}
              value={description}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Button
              type='submit'
              onClick={handleSubmit}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              value='Update'
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

//Get the auth state
const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { setAlert, addExperienceField })(
  AddExperience
);
