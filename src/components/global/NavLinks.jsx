import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "services", text: "leistungen" },
  { id: 3, url: "location", text: "standort" },
];

const NavLinks = ({ close }) => {
  const dispatch = useDispatch();
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <div className="divide-y divide-gray-700">
            <li key={id}>
              <NavLink
                className="block capitalize py-2 text-yellow-500 text-lg rounded"
                to={url}
                onClick={() => dispatch(close)}
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
