import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default MainLayout;
