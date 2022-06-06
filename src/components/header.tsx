/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import logo from "../media/logo.png";

const header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    console.log(window);
  }, []);

  const navigations = [
    {
      name: "Home",
      isActive: true,
    },
    {
      name: "Celebrate",
    },
    {
      name: "Gifts",
    },
    {
      name: "New",
    },
  ];

  return (
    <div
      className={`justify-between flex text-center items-center grid-container p-8 font-semibold  bg-white sticky top-0 w-screen ${
        scroll ? "shadow-md ease-in duration-500" : ""
      }`}
    >
      <div className="col-start-2 col-end-3">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-9" />
            <h1 className="">Christmas</h1>
          </div>
          <div className="flex gap-10 items-center">
            <ul className="hidden text-center items-center gap-16 text-lg md:flex">
              {navigations.map((navigation: any) => {
                const { name, isActive } = navigation;
                return (
                  <a href="">
                    <li
                      className={`"px-2 py-1  hover:text-maroon " ${
                        isActive ? "text-maroon border-b-maroon" : ""
                      } `}
                    >
                      {name}
                    </li>
                  </a>
                );
              })}
            </ul>
            <button
              className=" m-0 p-0 md:hidden"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <box-icon name="menu"></box-icon>
            </button>

            {isMenuOpen ? (
              <ul className="block text-center absolute top-24 bg-maroon text-white w-full left-0 items-center gap-16 text-lg p-3 md:hidden">
                {navigations.map((navigation: any) => {
                  const { name } = navigation;
                  return (
                    <a href="">
                      <li className="px-2 py-1  hover:text-maroon ">{name}</li>
                    </a>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <div>
              <box-icon name="moon"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;