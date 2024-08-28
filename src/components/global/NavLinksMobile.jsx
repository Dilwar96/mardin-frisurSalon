import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "services", text: "leistungen" },
  { id: 3, url: "location", text: "standort" },
];

const NavLinksMobile = ({ toggle }) => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              className="block capitalize py-2 text-yellow-500 text-4xl rounded"
              to={url}
              onClick={() => dispatch(toggle)}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default NavLinksMobile;
