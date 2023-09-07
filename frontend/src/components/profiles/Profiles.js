import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  // Replace this useEffect with your actual data fetching logic
  useEffect(() => {
    // Simulate fetching profiles from an API or database
    setTimeout(() => {
      const fetchedProfiles = [
        {
          _id: 1,
          firstname: 'John',
          lastname: 'Doe',
          username: 'johndoe123',
          avatar: 'frontend/src/img/img1.png',
          bio: 'Frontend Developer',
          location: 'New York, NY',
          skills: ['HTML', 'CSS', 'JavaScript'],
          social: {
            website: 'https://www.example.com',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
          },
        },
        // Add more profiles here
      ];

      setProfiles(fetchedProfiles);
      setLoading(false);
    }, 2000); // Simulated loading delay
  }, []);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'>Profiles</h1>
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
              <h4>No profiles found...</h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Profiles;
