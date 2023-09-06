import React from "react";

const OverView = (props) => {
  return (
    <div className="pt-8 pb-5 lg:xl:py-9 px-16 bg-[#DEDDE8] h-[calc(100vh-292px)] ">
      <div className="bg-white flex flex-col md:flex-row rounded-[10px] ">
        <div className="flex md:flex-col py-4 px-6 justify-center space-x-6 text-sm xl:text-base md:items-start md:justify-start md:space-x-0 md:space-y-6 md:pt-14 xl:px-20 md:border-r border-[#B8B8B8]">
          <p className="text-blue-500 cursor-pointer">Overwiew</p>
          <p onClick={props.over} className="pb-10 cursor-pointer ">
            Edit Profile
          </p>
        </div>
        <hr className="border mx-5 border-[#BEBDC4] mt-4" />
      </div>
    </div>
  );
};

export default OverView;
