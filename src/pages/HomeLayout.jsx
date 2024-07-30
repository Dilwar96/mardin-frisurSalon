import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span>Barbar</span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
