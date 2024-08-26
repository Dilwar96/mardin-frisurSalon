import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/menu/menuSlice";
import NavLinks from "./NavLinks";
import log from "../../assets/log.png";
import MobileMenu from "./MobileMenu"; // Neue Komponente für das mobile Menü

const Navbar = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  return (
    <nav className="bg-accent-content">
      <div className="navbar container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={log} alt="Logo" className="w-20 object-cover" />
        </NavLink>

        <div className="hidden lg:block">
          <ul className="menu menu-horizontal space-x-4">
            <NavLinks />
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => dispatch(toggle())}>
          <FaBarsStaggered className="h-6 w-6 text-yellow-500" />
        </button>

        {/* Conditional rendering of the MobileMenu component */}
        {isOpen && <MobileMenu toggle={toggle} />}
      </div>
    </nav>
  );
};

export default Navbar;
