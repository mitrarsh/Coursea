import { Outlet } from "react-router-dom";
import NavContainer from "./NavContainer.js";
import SideBar from "./SideBar.js";

const RootLayout = () => {
  return (
    <main className="display-flex flex-row ">
      <SideBar />
      <div className="flex-1">
        <NavContainer/>

        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
