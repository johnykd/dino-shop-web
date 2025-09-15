import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { DarkMode } from "./DarkMode";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  return (
    <nav>
      <div
        className="container flex flex-col justify-between py-8 
      sm:flex-row sm:items-center gap-4"
      >
        <Logo />

        <Search />
        <div className="flex gap-2">
          <DarkMode />
          <DropDownMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
