import React, { useState } from 'react';
import EditProfile from './EditProfile';
import OverView from './OverView';

const About = (props) => {
  const [editprofile, setEditProfile] = useState(true);
  const [overView, setOverView] = useState(false);

  const profile = () => {
    setEditProfile(!setEditProfile);
    setOverView(true);
  };

  const overViewFunction = () => {
    setOverView(!overView);
    setEditProfile(true);
  };

  return (
    <>
      <div className='flex bg-[#E8E7EF] pb-10 items-center justify-center text-sm xl:text-base space-x-5 font-[400]'>
        <p onClick={props.postOpen}>Posts</p>
        <p className='text-[#394BAA]'>About</p>
        <p onClick={props.photoOpen}>Photos</p>
      </div>

      {editprofile && <EditProfile prof={profile} />}

      {overView && <OverView over={overViewFunction} />}
    </>
  );
};

export default About;