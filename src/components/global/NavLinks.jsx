import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "services", text: "leistungen" },
  { id: 3, url: "location", text: "standort" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <div key={uuidv4()} className="divide-y divide-gray-700">
            <li key={id}>
              <NavLink
                className="block capitalize py-2 text-yellow-500 text-lg rounded"
                to={url}
              >
                {text}
              </NavLink>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
