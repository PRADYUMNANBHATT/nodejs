import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-[100vw] overflow-hidden h-[80px] bg-[white] shadow-sm shadow-black flex flex-row justify-between align-middle items-center pr-5 pl-5">
      <div className="text-2xl text-[#1d9bf0]">Dynamic Puzzle Game</div>
      <div className="flex">
        <ul className="flex flex-row gap-2 text-gray">
          <Link to="/puzzlegame">Puzzle</Link> <Link to={"/about"}>About</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
