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
        <div className="flex justify-center items-center gap-5   py-24">
          <div className="w-2/4 hidden md:block">
            <img src={heroImg} alt="heroImage" />
          </div>
          <div className="w-2/4">
            <h1 className="text-5xl font-semibold">
              Merry Christmas and Happy New Year!
            </h1>
            <p className="text-gray-500 text-xl py-3 max-w-md">
              Christmas and a new year is about to begin, all good wishes and
              successes
            </p>
            <div className="pt-5">
              <button className="p-4 bg-maroon text-white text-2xl rounded-full hover:bg-red-700 ">
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
