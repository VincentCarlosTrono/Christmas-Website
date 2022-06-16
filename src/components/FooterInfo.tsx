import React from "react";
import { FooterInfoInterface, FooterInfos } from "src/types";

const FooterInfo = () => {
  const footerInfos: FooterInfos = [
    {
      title: "Our Services",
      item1: "Pricing",
      item2: "Discounts",
      item3: "Shipping mode",
    },
    {
      title: "Support",
      item1: "FAQS",
      item2: "Support center",
      item3: "Contact us",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {footerInfos.map((footerInfo: FooterInfoInterface) => {
        const { title, item1, item2, item3 } = footerInfo;
        return (
          <div className="">
            <h1 className="font-semibold text-lg py-3 dark:text-white">
              {title}
            </h1>
            <div className="text-gray-400">
              <p className="py-2 hover:text-maroon">{item1}</p>
              <p className="py-2 hover:text-maroon">{item2}</p>
              <p className="py-2 hover:text-maroon">{item3}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterInfo;
