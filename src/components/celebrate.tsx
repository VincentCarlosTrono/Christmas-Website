import React from "react";
import Celebrate from "../media/celebrate.png";

const celebrate = () => {
  return (
    <div className="grid-container py-20" id="celebrate">
      <div className="gap-28 justify-between items-center flex col-start-2 col-end-3 ">
        <div className="  text-center md:text-left md:max-w-md">
          <h2 className=" text-2xl md:text-4xl font-semibold  py-4 ">
            Celebrate With A Lot Of Love
          </h2>
          <p className="text-sm text-gray-500 md:text-xl py-8">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <button className=" px-8 py-5 rounded-full hover:bg-red-700 bg-maroon text-white font-semibold">
            Send Good Wishes
          </button>
        </div>

        <div className="hidden md:block w-2/4 ">
          <img src={Celebrate} alt="celebrate" />
        </div>
      </div>
    </div>
  );
};

export default celebrate;
