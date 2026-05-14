
import { Outlet } from "react-router-dom";
import Header from "../Homepage/Header";
import FooterNewsletter from "../Homepage/Footer"


function Layout() {
  return (
    <>
      <Header /> 
      <Outlet />
      <FooterNewsletter />
    </>
  );
}

export default Layout;
