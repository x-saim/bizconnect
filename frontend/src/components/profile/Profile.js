import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileByID } from '../../redux/actions/profileActions';
import { Link, useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
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
            <Link to='/profiles' className='btn btn-light'>
              Back to Profiles
            </Link>

            {user.isAuthenticated &&
              user.loading === false &&
              user.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
                </Link>
              )}

            <div className='profile-grid my-1'>
              <ProfileTop profile={profile} />
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
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  user: state.authReducer,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
