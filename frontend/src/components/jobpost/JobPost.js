import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJobPost } from '../../redux/actions/jobpostActions';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const JobPost = ({ getJobPost, jobPost: { jobPost, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getJobPost(id);
  }, [getJobPost, id]);

  // Add conditional rendering to handle cases where jobPost is null or still loading
  if (loading || jobPost === null) {
    return <Spinner />;
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: '40px' }} elevation={3}>
      <CardContent>
        <Typography variant='h4' component='div' gutterBottom>
          {jobPost.title}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          Company: {jobPost.company}
        </Typography>
        <Typography variant='body2' paragraph>
          {jobPost.description}
        </Typography>
        <Typography variant='body2' paragraph>
          Requirements: {jobPost.requirements}
        </Typography>
        <Typography variant='body2' paragraph>
          Location: {jobPost.location}
        </Typography>
        <Typography variant='body2' paragraph>
          Employment Type: {jobPost.employmentType}
        </Typography>
        <Typography variant='body2' paragraph>
          Salary: ${jobPost.salary}
        </Typography>
        <Typography variant='body2' paragraph>
          Contact Email: {jobPost.contactEmail}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={`/jobposts/apply/${id}`}
        >
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

JobPost.propTypes = {
  jobPost: PropTypes.object.isRequired,
  getJobPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobPost: state.jobPostReducer,
});

export default connect(mapStateToProps, { getJobPost })(JobPost);
