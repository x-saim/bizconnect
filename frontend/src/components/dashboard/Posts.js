import React from "react";

const Posts = (props) => {
  return (
    <>
      <div className="flex bg-[#E8E7EF] pb-10 items-center justify-center text-sm xl:text-base space-x-5 font-[400]">
        <p className="text-[#394BAA]">Posts</p>
        <p onClick={props.aboutOpen}>About</p>
        <p onClick={props.photoOpen}>Photos</p>
      </div>

      <div className="pt-8 pb-5 lg:xl:py-9 px-16 bg-[#DEDDE8] h-[calc(100vh-292px)] "></div>
    </>
  );
};

export default Posts;
