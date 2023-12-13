import { Outlet } from "react-router-dom";
import Appbar from "../comp/Appbar";
import NavDrawer from "../comp/Drawer";



const Root = () => {
  const drawerWidth = 240;

  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />

      <NavDrawer drawerWidth={drawerWidth} />
      

      <Outlet />
    </div>
  );
};

export default Root;
