import React from "react";
import Gift1 from "../media/gift1.png";
import Gift2 from "../media/gift2.png";
import Gift3 from "../media/gift3.png";
import Gift4 from "../media/gift4.png";
import Gift5 from "../media/gift5.png";

const gifts = () => {
  const giftLists = [
    {
      image: Gift1,
      price: "$15",
      name: "Gingerbread",
    },
    {
      image: Gift2,
      price: "$22",
      name: "Santaclause Hat",
    },
    {
      image: Gift3,
      price: "$48",
      name: "Christmas Tree",
    },
    {
      image: Gift4,
      price: "$35",
      name: "Snowman",
    },
    {
      image: Gift5,
      price: "$12",
      name: "Candy Stick",
    },
  ];
  return (
    <div className="grid-container " id="gift" data-aos="fade-up">
      <div className="col-start-2 col-end-3 p-11">
        <h2 className="text-center font-semibold text-3xl p-10 dark:text-white">
          Share A Gift
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          {giftLists.map((giftList: any) => {
            const { image, price, name } = giftList;
            return (
              <div className=" grid justify-center max-w-full">
                <div className="shadow-lg dark:shadow-black p-6 rounded-lg">
                  <div className="flex justify-end hover:cursor-pointer">
                    <box-icon color="red" name="heart"></box-icon>
                  </div>

                  <img
                    className="w-48 hover:-translate-y-3 "
                    src={image}
                    alt="images"
                  />
                  <h1 className="font-bold dark:text-white">{price}</h1>
                  <p className="text-gray-400 font-semibold py-2">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default gifts;
