import React from "react";
import "./index.scss";
import { Menubar } from "primereact/menubar";
import SvgLogo from "../../assets/icons/SvgLogo";
import { Button } from "primereact/button";
import Cookies from "js-cookie";
import { TOKEN } from "../../utility/constant";
import { useNavigate } from "react-router-dom";
import { resetStore } from "../../redux/store";

const NavBar = ({ Logout }) => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/home");
  };

  const token = Cookies.get("token");
  const login = [
    {
      label:"Home",
    },
    {
      label: "Products",
    },
    {
      label: "Services",
    },
    {
      label: "Blogs",
    },
    {
      label: "Contact us",
    },
  ];

  const AfterLogin = [
    {
      label: "Agent Logout",
      command: () => {
        Cookies.remove(TOKEN);
        window.location.reload();
        resetStore()
      },
    },
  ];

  const Navdata = token === undefined ? login : AfterLogin;
  console.log(token, "leo");

  const start = (
    <div onClick={handleclick}>
      <SvgLogo className="mr-2" color="black" />
    </div>
  );
  const end = (
    <div className="btn">
      <Button label="Agent Logout" />
    </div>
  );
  return (
    <div className="nav__block">
      {token === undefined ? (
        <Menubar
          model={Navdata}
          start={start}
          end={Logout === "true" ? end : ""}
        />
      ) : (
        <Menubar
          model={Navdata}
          start={start}
          end={Logout === "true" ? end : ""}
        />
      )}
    </div>
  );
};

export default NavBar;
