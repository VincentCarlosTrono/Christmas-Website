import React from "react";
import messageImage from "../media/message.png";

const message = () => {
  return (
    <div className="grid-container  py-10" data-aos="fade-up">
      <div className="col-start-2 col-end-3 flex justify-evenly items-center bg-maroon rounded-3xl py-20 p-20">
        <div className="max-w-xs">
          <h1 className="text-5xl font-semibold text-white pb-3">
            Send Good Wishes!
          </h1>
          <div>
            <input
              className="max-w-full  py-5 border-2 rounded-full p-10 my-3 "
              type="text"
              placeholder="Write your message"
            />
          </div>
          <button className=" rounded-full bg-gray-900 px-12 py-5 text-white">
            Send Message
          </button>
        </div>
        <img
          className="w-96 rotate-25 md:block hidden"
          src={messageImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default message;
