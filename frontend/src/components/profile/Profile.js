import React from 'react';

const Profile = () => {
  const profile = {
    // Replace with your profile data
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe123',
    bio: 'Frontend Developer',
    location: 'New York, NY',
    skills: ['HTML', 'CSS', 'JavaScript'],
    social: {
      website: 'https://www.example.com',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  };

  return (
    <div className='container'>
      <div className='profile-header bg-primary'>
        <h1 className='large'>{`${profile.firstname} ${profile.lastname}`}</h1>
        <p className='lead'>{profile.bio}</p>
        <p>{profile.location}</p>
        <div className='icons'>
          {profile.social.website && (
            <a
              href={profile.social.website}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-globe fa-2x'></i>
            </a>
          )}
          {profile.social.twitter && (
            <a
              href={profile.social.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-2x'></i>
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
          )}
          {profile.social.github && (
            <a
              href={profile.social.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-2x'></i>
            </a>
          )}
        </div>
      </div>

      <div className='profile-about bg-light p-2'>
        <h2 className='text-primary'>Skills</h2>
        <div className='skills'>
          {profile.skills.map((skill, index) => (
            <div className='p-1' key={index}>
              <i className='fas fa-check'></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
