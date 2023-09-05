import React from "react";
import logo from "../images/logo.png";
import web from "../images/web.png";

const Welcome = () => {
  return (
    <div className="bg-[#EBEAF1] px-8 py-3 xl:px-10 md:h-[100vh]">
      <img src={logo} className="w-[8rem] lg:w-[15rem]" alt="" />
      <p className="mt-5 text-center md:text-left ">
        provide professionals with a platform for networking, finding job
        opportunities.
      </p>

      <div className="flex flex-col mt-8 md:flex-row lg:mt-14">
        <form
          action=""
          className="flex flex-col bg-white px-4 py-8 rounded-md w-[90%] sm:w-[70%]  mx-auto md:w-[300px] lg:w-[400px] xl:w-[483px]] lg:h-fit lg:mx-0"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Email address"
            className="px-2 py-1 bg-[#F5F5F5] lg:px-3 lg:py-2"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="px-2 py-1 mt-5 bg-[#F5F5F5] lg:px-3 lg:py-2 lg:mt-9"
          />
          <button className="bg-[#586EB9] rounded-md mt-5 text-white py-1 lg:px-3 lg:py-2 lg:mt-9">
            Log in
          </button>
          <hr className="border border-[#B5B5B5] mt-5 lg:mt-9" />
          <button className="bg-[#60B958] rounded-md mt-5 text-white py-1 lg:px-3 lg:py-2 lg:mt-9">
            Create New Account
          </button>
        </form>

        <img src={web} className="w-[15rem] lg:w-[20rem] mx-auto mt-8" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
