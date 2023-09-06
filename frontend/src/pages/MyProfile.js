import React, { useState } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Posts from "../components/Posts";
import Photo from "../components/Photo";
import image1 from "../images/img1.png";

const MyProfile = () => {
  const [about, setAbout] = useState(true);
  const [post, setPost] = useState(false);
  const [photos, setPhotos] = useState(false);

  const postFunction = () => {
    setAbout(false);
    setPost(true);
    setPhotos(false);
  };

  const aboutFunction = () => {
    setAbout(true);
    setPost(false);
    setPhotos(false);
  };

  const photoFunction = () => {
    setAbout(false);
    setPost(false);
    setPhotos(true);
  };

  return (
    <>
      <Nav></Nav>
      <div className="bg-[#E8E7EF] pt-8 pb-5 lg:xl:py-9 px-16">
        <div className="flex items-center justify-center space-x-4">
          <img
            src={image1}
            className="w-[8rem] lg:w-[10rem] xl:w-[11rem]"
            alt=""
          />
          <span className="font-[600] tracking-wide">abc test</span>
        </div>
        <hr className="border border-[#BEBDC4] m-4" />
      </div>

      {about && <About postOpen={postFunction} photoOpen={photoFunction} />}

      {post && <Posts aboutOpen={aboutFunction} photoOpen={photoFunction} />}

      {photos && <Photo aboutOpen={aboutFunction} postOpen={postFunction} />}

      {/* <div className="pt-8 pb-5 lg:xl:py-9 px-16 bg-[#DEDDE8]">
                <div className="bg-white flex flex-col md:flex-row rounded-[10px] ">
                    <div className="flex md:flex-col py-4 px-6 justify-center space-x-6 text-sm xl:text-base md:items-start md:justify-start md:space-x-0 md:space-y-6 md:pt-14 xl:px-20 md:border-r border-[#B8B8B8]">
                        <p>Overwiew</p>
                        <p className="text-blue-500">Edit Profile</p>
                    </div>
                    <hr className="border mx-5 border-[#BEBDC4] mt-4"/>
                    
                    <div className="flex flex-col py-4 px-6 ">
                        <label htmlFor="">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
                        <label htmlFor="" className="mt-4">Avatar</label>
                        <input  type="text" name="" id=""
                            className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />

                    </div>


                </div>
            </div> */}

      {/* {editprofile && (
                <EditProfile
                    prof ={profile}    
                />
            )}

            {overView && (
                <OverView
                    over={overViewFunction}
                />
            )} */}
    </>
  );
};

export default MyProfile;
