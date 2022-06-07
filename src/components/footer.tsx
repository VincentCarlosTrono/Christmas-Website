import React from "react";
import logo from "../media/logo.png";
import available1 from "../media/aviable1.png";
import available2 from "../media/aviable2.png";
import footer1 from "../media/footer1.png";
import footer2 from "../media/footer2.png";

const footer = () => {
  const footerInfos = [
    {
      title: "Our Services",
      dif1: "Pricing",
      dif2: "Discounts",
      dif3: "Shipping mode",
    },
    {
      title: "Support",
      dif1: "FAQS",
      dif2: "Support center",
      dif3: "Contact us",
    },
  ];
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
                className=" absolute top-60  md:top-0 md:left-3/4 left-40 w-44"
                src={footer2}
                alt="footer2Img"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {footerInfos.map((footerInfo: any) => {
              const { title, dif1, dif2, dif3 } = footerInfo;
              return (
                <div className="">
                  <h1 className="font-semibold text-lg py-3 dark:text-white">
                    {title}
                  </h1>
                  <div className="text-gray-400">
                    <p className="py-2 hover:text-maroon">{dif1}</p>
                    <p className="py-2 hover:text-maroon">{dif2}</p>
                    <p className="py-2 hover:text-maroon">{dif3}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="font-semibold py-3 dark:text-white">Available on</h1>
            <div className="w-56">
              <img
                className="w-40 h-12 hover:opacity-80 cursor-pointer"
                src={available1}
                alt="playstore"
              />
              <img
                className="w-40 h-12 hover:opacity-80 cursor-pointer"
                src={available2}
                alt="applestore"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10 md:p-20 text-gray-400">
          <box-icon color="gray" name="copyright"></box-icon>
          <p>Bedimcode. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
