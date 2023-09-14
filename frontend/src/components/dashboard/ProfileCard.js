import React from 'react';
import PropTypes from 'prop-types';
import { MDBCol, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const ProfileCard = ({ profile, user }) => {
  return (
    <>
      <MDBCard className='mb-4'>
        <MDBCardBody>
          <MDBRow>
            <MDBCol sm='3'>
              <span>Full Name:</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>
                {profile && profile.user.firstname}{' '}
                {profile && profile.user.lastname}
              </span>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm='3'>
              <span>Email:</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>{user.email}</span>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm='3'>
              <span>Phone:</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>(111) 222-3333</span>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm='3'>
              <span>Mobile</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>(111) 222-3333</span>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm='3'>
              <span>Address:</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>{profile.location}</span>
            </MDBCol>
          </MDBRow>

          <hr />

          <MDBRow>
            <MDBCol sm='3'>
              <span>Company:</span>
            </MDBCol>
            <MDBCol sm='9'>
              <span className='text-muted'>{profile.company}</span>
            </MDBCol>{' '}
          </MDBRow>
          <h2 className='medium'>Bio</h2>
          <p>{profile.bio}</p>
          <h2 className='medium'>Skills</h2>
          <ul>
            {profile.skills ? (
              profile.skills.map((skill, index) => (
                <li key={index}>
                  <i className='fas fa-check' />
                  {skill}
                </li>
              ))
            ) : (
              <li>No skills available.</li>
            )}
          </ul>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default ProfileCard;
