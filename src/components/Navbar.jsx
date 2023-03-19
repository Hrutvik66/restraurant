import React from "react";
// React icons
import { HiOutlineShoppingBag } from "react-icons/hi2";
// React Router Dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[1rem_5rem] fixed w-full z-50 font-abel">
      <Link to="/">
        <h1 className="font-bold text-2xl text-red-500">Restraurant</h1>
      </Link>
      <ul className="flex space-x-16 items-center text-lg">
        <li className="cursor-pointer hover:text-red-700 font-semibold hover-animation">
          Menu
        </li>
        <li className="cursor-pointer hover:text-red-700 font-semibold hover-animation">
          About
        </li>
        <li className="cursor-pointer hover:text-red-700 font-semibold hover-animation">
          Contact
        </li>
      </ul>
      <div className="flex space-x-5 items-center">
        <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer hover:scale-105 hover-animation hover:text-red-600" />
        <Link to="/login">
          <button className="text-[1rem] bg-red-600 rounded-xl p-[0.3rem_1.5rem] text-white hover:bg-[#f3e9e9] hover:text-red-600 border-[2px] border-solid border-[#f3e9e9] hover:border-red-600 hover-animation">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
