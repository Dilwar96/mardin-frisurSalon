// MobileMenu.jsx
import React from "react";
import { useDispatch } from "react-redux";
import NavLinks from "./NavLinks";

const MobileMenu = ({ toggle }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 right-0 bottom-0 w-3/4 bg-black shadow-md z-50">
      <button
        className="absolute top-3 left-3 text-5xl text-white hover:text-gray-400"
        onClick={() => dispatch(toggle())}
      >
        &times;
      </button>
      <ul className="menu menu-compact flex flex-col p-4">
        <NavLinks />
      </ul>
    </div>
  );
};

export default MobileMenu;
