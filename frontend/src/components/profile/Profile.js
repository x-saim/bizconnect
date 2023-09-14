import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileByID } from '../../redux/actions/profileActions';
import { Link, useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';

const Profile = ({ getProfileByID, auth, profile: { profile, loading } }) => {
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
            <Link to='/profiles' className='btn btn-light'>
              Back to Profiles
            </Link>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
                </Link>
              )}

            <div className='profile-grid my-1'>
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <div className='profile-exp bg-white p-2'>
                <h2 className='text-primary'>Experience</h2>
                {profile.experience.length > 0 ? (
                  <>
                    {profile.experience.map((experience) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No experience credentials</h4>
                )}
              </div>
              <div className='profile-edu bg-white p-2'>
                <h2 className='text-primary'>Education</h2>
                {profile.education.length > 0 ? (
                  <>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No education credentials</h4>
                )}
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileByID: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  auth: state.authReducer,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
