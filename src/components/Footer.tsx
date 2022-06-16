import React from "react";
import logo from "../media/logo.png";
import footer1 from "../media/footer1.png";
import footer2 from "../media/footer2.png";
import FooterInfo from "./FooterInfo";
import FooterDownloads from "./FooterDownloads";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="grid-container">
      <div className="col-start-2 col-end-3 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="">
            <div className="flex items-center">
              <img src={logo} alt="" />
              <h2 className="font-semibold dark:text-white">Christmas</h2>
            </div>
            <p className="max-w-xs text-lg text-gray-400">
              This Christmas give a lot of love
            </p>
            <div>
              <img
                data-aos="fade-left"
                className=" absolute  md:left-0 left-64 w-32 md:w-60 "
                src={footer1}
                alt="footer1Img"
              />
              <img
                data-aos="fade-down"
                className=" absolute top-60  md:top-36 md:left-3/4 left-40 w-44 "
                src={footer2}
                alt="footer2Img"
              />
            </div>
          </div>
          <FooterInfo />
          <FooterDownloads />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
