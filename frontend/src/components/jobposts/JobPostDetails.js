import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJobPost } from '../../redux/actions/jobpostActions';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const JobPostDetails = ({ getJobPost, jobPost: { jobPost } }) => {
  const { id } = useParams;

  useEffect(() => {
    getJobPost(id);
  }, [getJobPost, id]);

  return (
    <div className='job-post-details'>
      <h2>{jobPost.title}</h2>
      <p>{jobPost.description}</p>

      <Link to={`/jobposts/apply/${id}`}>Apply</Link>
    </div>
  );
};

JobPostDetails.propTypes = {
  jobPost: PropTypes.object.isRequired,
  getJobPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobPost: state.jobPostReducer,
});

export default connect(mapStateToProps, { getJobPost })(JobPostDetails);
