import React, { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import logo from "../media/logo.png";
import { NavigationInterface } from "src/types";
import { navigations } from "src/constants";

const Header = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

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
              {navigations.map((navigation: NavigationInterface) => {
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

            {isMenuOpen && <Menu />}

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

export default Header;
