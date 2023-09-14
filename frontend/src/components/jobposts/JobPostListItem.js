import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { deleteJobPost } from '../../redux/actions/jobpostActions';
import { connect } from 'react-redux';

const JobPostListItem = ({ deleteJobPost, auth, jobPost }) => {
  const formattedDate = moment(jobPost.date).format('YYYY-MM-DD');

  // Check if the authenticated user is the creator of the job post
  const isJobPostCreator =
    auth.isAuthenticated && auth.user._id === jobPost.user;
  return (
    <>
      <div className='profile bg-light'>
        <div className='part1'>
          <div>
            <h2>{jobPost.title}</h2>
            <b>{jobPost.company}</b>
            <p className='my-1'>{jobPost.location}</p>
          </div>

          <div className='details'>
            <span>Posting Date: {formattedDate}</span>
            <br></br>
            <span>{jobPost.employmentType}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{jobPost.location}</span>
          </div>
        </div>

        <div className='part2'>
          {jobPost.requirements.split(', ').map((requirement, index) => (
            <span key={index}>{requirement}</span>
          ))}
        </div>
        <div className='part2'>
          <div>
            <Link to={`/jobposts/${jobPost._id}`} className='btn btn-primary'>
              View Job Posting
            </Link>
          </div>
          <br></br>
          <div>
            <Link
              to={`/jobposts/apply/${jobPost._id}`}
              className='btn btn-dark'
            >
              Apply
            </Link>
          </div>
          <br></br>
          <div>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id && (
                <>
                  {isJobPostCreator && (
                    <button
                      onClick={() => deleteJobPost(jobPost._id)}
                      className='btn btn-danger'
                    >
                      Delete Job Post
                    </button>
                  )}
                </>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

JobPostListItem.propTypes = {
  jobPost: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteJobPost: PropTypes.object.isRequired,
};

// Get the auth state
const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { deleteJobPost })(JobPostListItem);
