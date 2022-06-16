import React from "react";
import Title from "./Title";
import giving1 from "../media/giving1.png";
import giving2 from "../media/giving2.png";
import giving3 from "../media/giving3.png";
import { FeatureInterface, Features } from "src/types";

const Feature = () => {
  const features: Features = [
    {
      image: giving1,
      name: "Surprise Gifts",
      definition: "They are the best gifts there is.",
    },
    {
      image: giving2,
      name: "Ormaments",
      definition: "Give a moment to decorate.",
    },
    {
      image: giving3,
      name: "Lots of Love",
      definition: "Give away feelings that last forever.",
    },
  ];

  return (
    <div className="grid-container">
      <div className="col-start-2 col-end-3">
        <div>
          <Title title="Start Giving This Christmas" />
          <div className="md:flex justify-center gap-11 p-10 ">
            {features.map((feature: FeatureInterface) => {
              const { image, name, definition } = feature;
              return (
                <div className="items-center text-center p-10">
                  <div className="flex justify-center hover:-translate-y-2 hover:cursor-pointer">
                    <img
                      className="w-36"
                      data-aos="flip-up"
                      src={image}
                      alt="images"
                    />
                  </div>

                  <h1 className="font-semibold text-xl dark:text-white">
                    {name}
                  </h1>
                  <div className="w-xs px-5">
                    <p className="p-2 text-gray-400 ">{definition}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
