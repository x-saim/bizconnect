import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import { getProfiles } from '../../redux/actions/profileActions';
import PropTypes from 'prop-types';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            professionals from various industries.
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found.</h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
