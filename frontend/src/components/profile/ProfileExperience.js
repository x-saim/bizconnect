import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  const formatFromDate = moment(from).format('YYYY-MM-DD');
  const formatToDate = moment(to).format('YYYY-MM-DD');
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        {formatFromDate} - {to ? formatToDate : 'Now'}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Location: </strong> {location}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
