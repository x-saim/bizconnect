import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  const formatFromDate = moment(from).format('YYYY-MM-DD');
  const formatToDate = moment(to).format('YYYY-MM-DD');
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        {formatFromDate} - {to ? formatToDate : 'Now'}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
