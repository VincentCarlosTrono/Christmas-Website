import React from "react";
import { navigations } from "src/constants";
import { NavigationInterface } from "src/types";

const Menu = () => {
  return (
    <ul className="block text-center absolute top-24 bg-maroon text-white w-full left-0 items-center gap-16 text-lg p-3 md:hidden">
      {navigations.map((navigation: NavigationInterface) => {
        const { name, link } = navigation;
        return (
          <a href={link}>
            <li className="px-2 py-1  hover:text-maroon ">{name}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default Menu;
