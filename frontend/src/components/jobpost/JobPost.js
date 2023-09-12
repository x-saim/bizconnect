import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJobPost, deleteJobPost } from '../../redux/actions/jobpostActions';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Navigate } from 'react';
const JobPost = ({
  auth,
  deleteJobPost,
  getJobPost,
  jobPost: { jobPost, loading },
}) => {
  const { id } = useParams();

  useEffect(() => {
    getJobPost(id);
  }, [getJobPost, id]);

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  // Handle the delete button click
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    await deleteJobPost(id);
    return <Navigate to='/jobposts' />;
  };

  // Check if the delete button should be shown
  useEffect(() => {
    if (
      !loading &&
      auth.isAuthenticated &&
      auth.user &&
      jobPost &&
      auth.user._id === jobPost.user._id
    ) {
      setShowDeleteButton(true);
    } else {
      setShowDeleteButton(false);
    }
  }, [loading, auth, jobPost]);

  // Render a loading spinner if jobPost is still loading
  if (loading) {
    return <Spinner />;
  }

  // Render the component only if jobPost is defined
  return jobPost !== null ? (
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
        {showDeleteButton && (
          <button onClick={handleDeleteClick} className='btn btn-dark'>
            Delete Posting
          </button>
        )}
      </CardContent>
    </Card>
  ) : (
    // Render a message when jobPost is null or undefined
    <div>
      Job post not found.
      {/* You can add a "Back" button or a link to a different page here */}
    </div>
  );
};

JobPost.propTypes = {
  jobPost: PropTypes.object.isRequired,
  getJobPost: PropTypes.func.isRequired,
  deleteJobPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  jobPost: state.jobPostReducer,
  auth: state.authReducer,
});

export default connect(mapStateToProps, { getJobPost, deleteJobPost })(JobPost);
