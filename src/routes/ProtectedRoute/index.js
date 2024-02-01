import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Cookies from "js-cookie";

// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import "./index.scss";
import { TOKEN } from "../../utility/constant";
import ResponsiveDrawer from "../../components/SideBar";
import AgentNavBar from "../../agentModule/component/navBar";

const index = () => {
  const Auth = () => {
    const user = Cookies.get(TOKEN);
    console.log(user, "user");

    return user && user;
  };
  return (
    <div className="protected__layout__container">
      <ResponsiveDrawer />

      <div className="protected__layout__content__space">
        <div className="protected__layout__Footer__container">
          {/* <ResponsiveDrawer/> */}
        </div>
        <div className="main__content">
          <div className="protected__layout__header">
            {/* <NavBar /> */}
            <AgentNavBar />
          </div>
          {Auth() ? <Outlet /> : <Navigate to="/login" replace />}

          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default index;
