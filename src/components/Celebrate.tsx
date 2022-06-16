import React from "react";
import celebration from "../media/celebrate.png";

const Celebrate = () => {
  return (
    <div className="grid-container py-20" id="celebrate">
      <div className="gap-28 justify-between items-center flex col-start-2 col-end-3 ">
        <div
          className="  text-center md:text-left md:max-w-md"
          data-aos="fade-right"
        >
          <h2 className=" text-xl px-48 md:px-0 md:text-4xl font-semibold  py-4 dark:text-white">
            Celebrate With A Lot Of Love
          </h2>
          <p className="text-sm text-gray-400 md:px-0 px-28 md:text-xl py-8">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <button className=" px-8 py-5 rounded-full hover:bg-red-700 bg-maroon text-white font-semibold">
            Send Good Wishes
          </button>
        </div>

        <div className="hidden md:block w-2/4 " data-aos="fade-left">
          <img src={celebration} alt="celebrate" />
        </div>
      </div>
    </div>
  );
};

export default Celebrate;
