import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRight } from '../../icons';

const ProfileItem = ({ profile }) => {
  const {
    user: { _id, firstname, lastname, avatar },
    status,
    company,
    location,
    skills,
  } = profile;

  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>
          {firstname} {lastname}
        </h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>

        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>

      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i class='fa-solid fa-arrow-right'></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
