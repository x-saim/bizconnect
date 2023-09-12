import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJobPosts } from '../../redux/actions/jobpostActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import JobPostListItem from './JobPostListItem';

const JobPostsList = ({ getJobPosts, jobPosts }) => {
  const [filteredJobPosts, setFilteredJobPosts] = useState([]);

  useEffect(() => {
    getJobPosts();
  }, [getJobPosts]);

  useEffect(() => {
    setFilteredJobPosts(jobPosts);
  }, [jobPosts]);

  return (
    <div className='job-post-list'>
      {filteredJobPosts?.map((jobPost) => (
        <div key={jobPost._id} className='job-post-item'>
          <JobPostListItem key={jobPost._id} jobPost={jobPost} />
        </div>
      ))}
    </div>
  );
};

JobPostsList.propTypes = {
  jobPosts: PropTypes.array.isRequired,
  getJobPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobPosts: state.jobPostReducer.jobPosts,
});

export default connect(mapStateToProps, { getJobPosts })(JobPostsList);
