import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import log from "../../assets/log.png";

const Navbar = () => {
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

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost m-1">
            <FaBarsStaggered className="h-6 w-6 text-yellow-500" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-200 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
