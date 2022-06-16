import React from "react";
import playstore from "../media/aviable1.png";
import appstore from "../media/aviable2.png";

const FooterDownloads = () => {
  return (
    <div>
      <h1 className="font-semibold py-3 dark:text-white">Available on</h1>
      <div className="w-56">
        <img
          className="w-40 h-12 hover:opacity-80 cursor-pointer"
          src={playstore}
          alt="playstore"
        />
        <img
          className="w-40 h-12 hover:opacity-80 cursor-pointer"
          src={appstore}
          alt="applestore"
        />
      </div>
    </div>
  );
};

export default FooterDownloads;
