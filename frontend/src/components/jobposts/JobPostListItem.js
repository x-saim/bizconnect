import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const JobPostListItem = ({ jobPost }) => {
  const formattedDate = moment(jobPost.date).format('YYYY-MM-DD');

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
          <Link to={`/jobposts/${jobPost._id}`} className='btn btn-primary'>
            View Job Posting
          </Link>
          <div></div>
          <br></br>
          <Link to={`/jobposts/apply/${jobPost._id}`} className='btn btn-dark'>
            Apply
          </Link>
        </div>
      </div>
    </>
  );
};

JobPostListItem.propTypes = {
  jobPost: PropTypes.object.isRequired,
};

export default JobPostListItem;
