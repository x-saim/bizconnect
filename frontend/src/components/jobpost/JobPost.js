import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJobPost } from '../../redux/actions/jobpostActions';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
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
    <div className='job-post-details'>
      <h2>{jobPost.title}</h2>
      <p>{jobPost.description}</p>

      <Link to={`/jobposts/apply/${id}`}>Apply</Link>
    </div>
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
