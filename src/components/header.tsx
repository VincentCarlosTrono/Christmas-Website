/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import logo from "../media/logo.png";
import { ThemeContext } from "./ThemeContext";

const header = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const navigations = [
    {
      name: "Home",
      link: "/",
      isActive: true,
    },
    {
      name: "Celebrate",
      link: "#celebrate",
    },
    {
      name: "Gifts",
      link: "#gift",
    },
    {
      name: "New",
      link: "#new",
    },
  ];

  return (
    <div
      className={`z-10 justify-between flex text-center items-center grid-container p-8 font-semibold dark:bg-blackishRed bg-white sticky top-0 w-screen ${
        scroll && "shadow-lg dark:shadow-black ease-in duration-500"
      }`}
    >
      <div className="col-start-2 col-end-3">
        <div className="flex items-center justify-between dark:text-white">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-9" />
            <h1 className="">Christmas</h1>
          </div>
          <div className="flex justify-center gap-10 items-center">
            <ul className="hidden text-center items-center gap-16 text-lg md:flex ">
              {navigations.map((navigation: any) => {
                const { name, isActive, link } = navigation;
                return (
                  <a href={link}>
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
              className=" px-4 py-2 md:hidden flex justify-center"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {darkmode ? (
                <box-icon color="white" name="menu"></box-icon>
              ) : (
                <box-icon name="menu"></box-icon>
              )}
            </button>

            {isMenuOpen && (
              <ul className="block text-center absolute top-24 bg-maroon text-white w-full left-0 items-center gap-16 text-lg p-3 md:hidden">
                {navigations.map((navigation: any) => {
                  const { name, link } = navigation;
                  return (
                    <a href={link}>
                      <li className="px-2 py-1  hover:text-maroon ">{name}</li>
                    </a>
                  );
                })}
              </ul>
            )}

            <button
              onClick={() => {
                setDarkmode(!darkmode);
              }}
            >
              {darkmode ? (
                <div className="px-4 py-2 flex justify-center ">
                  <box-icon color="white" name="sun"></box-icon>
                </div>
              ) : (
                <div className="px-4 py-2 flex justify-center ">
                  <box-icon name="moon"></box-icon>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
