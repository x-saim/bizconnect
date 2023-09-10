import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileByID } from '../../redux/actions/profileActions';
import { useParams } from 'react-router-dom';

const Profile = ({ getProfileByID, user, profile: { profile, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getProfileByID(id);
  }, [getProfileByID, id]);

  return (
    <section className='container'>
      {loading && profile === null ? (
        <Spinner />
      ) : (
        profile && (
          <>
            <h1 className='large text-primary'>Profile Page</h1>

            <h2 className='medium'>User Information</h2>
            <img
              src={user.user.avatar}
              alt=''
              className='round-img'
              style={{ width: '100px', height: '100px' }} // Adjust width and height as needed
            />

            <p>
              Name: {profile.user.firstname} {profile.user.lastname}
            </p>

            <p>Company: {profile.company}</p>
            <p>Website: {profile.website}</p>
            <p>Location: {profile.location}</p>
            <p>Status: {profile.status}</p>

            <h2 className='medium'>Skills</h2>
            <ul>
              {profile.skills ? (
                profile.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))
              ) : (
                <li>No skills available.</li>
              )}
            </ul>

            <h2 className='medium'>Bio</h2>
            <p>{profile.bio}</p>

            <h2 className='medium'>Experience</h2>
            {profile.experience ? (
              profile.experience.map((experience) => (
                <div key={experience._id}>
                  <p>Title: {experience.title}</p>
                  <p>Company: {experience.company}</p>
                  <p>Location: {experience.location}</p>
                  <p>From: {experience.from}</p>
                  <p>To: {experience.to}</p>
                  <p>Description: {experience.description}</p>
                </div>
              ))
            ) : (
              <p>No experience available.</p>
            )}

            <h2>Education</h2>
            {profile.education ? (
              profile.education.map((education) => (
                <div key={education._id}>
                  <p>School: {education.school}</p>
                  <p>Degree: {education.degree}</p>
                  <p>Field of Study: {education.fieldofstudy}</p>
                  <p>From: {education.from}</p>
                  <p>To: {education.to}</p>
                  <p>Description: {education.description}</p>
                </div>
              ))
            ) : (
              <p>No education available.</p>
            )}
          </>
        )
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileByID: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  user: state.userReducer,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
