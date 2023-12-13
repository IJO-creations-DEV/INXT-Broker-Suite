import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Cookies from "js-cookie";


// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import "./index.scss";
import { TOKEN } from "../../utility/constant";

const index = () => {
  const Auth = () => {
    const user = Cookies.get(TOKEN);
    return user && user;
  };

  return (
    <div className="protected__layout__container">
      <div className="protected__layout__header">
        <NavBar />
      </div>
      <div className="protected__layout__content__space">
        <div className="protected__layout__Footer__container"></div>
        <div className="main__content">
          {Auth() ?
            <Outlet />
            :
            <Outlet />

            // <Navigate to='login' replace />
          }

          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default index;
