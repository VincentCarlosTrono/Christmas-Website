import React from "react";
import heroImg from "../media/home.png";

const hero = () => {
  return (
    <div
      className="grid-container pt-3 text-center md:text-left "
      id="/"
      data-aos="fade-up"
    >
      <div className="col-start-2 col-end-3">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-5  py-12  md:py-24">
          <div className=" flex justify-center ">
            <img className=" w-56 md:w-full " src={heroImg} alt="heroImage" />
          </div>
          <div className="">
            <h1 className=" text-xl md:text-5xl font-semibold px-11 md:px-0 dark:text-white">
              Merry Christmas and Happy New Year!
            </h1>
            <p className="text-gray-400 text-sm md:text-xl  px-7  md:px-0 py-3 md:max-w-md">
              Christmas and a new year is about to begin, all good wishes and
              successes
            </p>
            <div className="p-5">
              <button className=" py-3 px-5 md:p-4 bg-maroon text-white text-xs md:text-2xl rounded-full hover:bg-red-700 ">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
