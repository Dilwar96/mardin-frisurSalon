// MobileMenu.jsx
import React from "react";
import { useDispatch } from "react-redux";
import NavLinksMobile from "./NavLinksMobile";

const MobileMenu = ({ toggle }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    document.getElementById("sidebar").classList.add("translate-x-full");
    setTimeout(() => dispatch(toggle()), 300); // Wartezeit entspricht der Animationsdauer
  };

  return (
    <div
      id="sidebar"
      className="fixed top-0 right-0 bottom-0 w-full bg-black  z-50 transform transition-transform duration-300 ease-in-out translate-x-0"
    >
      <button
        className="absolute top-3 left-3 text-5xl text-white hover:text-gray-400"
        onClick={handleClose}
      >
        &times;
      </button>
      <ul className="menu menu-compact flex flex-col p-4">
        <NavLinksMobile close={handleClose} />
      </ul>
    </div>
  );
};

export default MobileMenu;
