import React from "react";
import new1 from "../media/new1.png";
import new2 from "../media/new2.png";
import new3 from "../media/new3.png";
import new4 from "../media/new4.png";

const newGift = () => {
  const gifts = [
    {
      image: new1,
      price: "$15",
      name: "Christmas Wreath",
    },
    {
      image: new2,
      price: "$95",
      name: "Reindeer",
    },
    {
      image: new3,
      price: "$20",
      name: "Snow Globe",
    },
    {
      image: new4,
      price: "$15",
      name: "Sledge",
    },
  ];
  return (
    <div className="grid-container pb-32" id="new" data-aos="fade-up">
      <div className="col-start-2 col-end-3 text-center">
        <h1 className="p-20 font-bold text-3xl">New Gifts</h1>
        <div className="flex justify-center gap-10">
          {gifts.map((gift: any) => {
            const { image, price, name } = gift;
            return (
              <div className="shadow-lg rounded-xl overflow-y-hidden relative">
                <div className="bg-maroon rounded-b-full py-3 px-10 ">
                  <img className="w-64" src={image} alt="giftsImages" />
                </div>
                <div>
                  <h1 className="font-semibold pt-2">{price}</h1>
                  <p className="text-gray-600 p-5">{name}</p>
                </div>

                <div className="absolute bottom-0 right-0 bg-maroon p-2">
                  <box-icon color="white" name="heart"></box-icon>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default newGift;
