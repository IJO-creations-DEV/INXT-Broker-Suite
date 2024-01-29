import React, { useRef } from "react";
import "./index.scss";
// import SvgBell from "../../../assets/agentIcon/SvgBell";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import SvgClose from "../../../assets/agentIcon/SvgClose";
import SvgProfile from "../../../assets/agentIcon/SvgProfile";
import SvgHelp from "../../../assets/agentIcon/SvgHelp";
import SvgLogOut from "../../../assets/agentIcon/SvgLogout";
import Cookies from "js-cookie";
import { TOKEN } from "../../../utility/constant";
import { useNavigate } from "react-router-dom";

const AgentNavBar = () => {
  const menuRight = useRef(null);
  const menuProfile = useRef(null);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove(TOKEN);
    navigate("/login");
    setTimeout(() => {
      window.location.reload();
    }, 500);
    console.log("object");
  };
  const items = [
    {
      label: (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "24px",
            color: "#111927",
          }}
        >
          Notification
        </div>
      ),
      items: [
        {
          template: (
            <div
              className="grid m-0"
              style={{ padding: "1rem", borderRadius: "10px" }}
            >
              <div className="col-8 md:col-8 lg:col-8">
                <div
                  style={{
                    color: "#111927",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Carson Darrin
                </div>
                <div
                  style={{
                    color: "#6C737F",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                  className="mt-1"
                >
                  Policy Number: 123456
                </div>
                <div
                  style={{
                    color: "#6366F1",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                  className="mt-1"
                >
                  Payment completed
                </div>
                <div
                  style={{
                    color: "#6C737F",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                  className="mt-2"
                >
                  Jan 06, 11:49 AM
                </div>
              </div>
              <div
                className="col-4 md:col-4 lg:col-4"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "15px",
                }}
              >
                <SvgClose />
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const Profileitems = [
    {
      label: (
        <div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
            }}
          >
            john visser
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              color: "#6C737F",
            }}
            className="mt-2"
          >
            johnvisser@inxt.com
          </div>
        </div>
      ),
      items: [
        {
          label: (
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
              }}
            >
              Profile
            </div>
          ),
          icon: (
            <div className="mr-3">
              <SvgProfile />
            </div>
          ),
        },
        {
          label: (
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
              }}
            >
              Help
            </div>
          ),
          icon: (
            <div className="mr-3">
              <SvgHelp />
            </div>
          ),
        },
        {
          label: (
            <div
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
              }}
              onClick={() => handleLogOut()}
            >
              Logout
            </div>
          ),
          icon: (
            <div className="mr-3">
              <SvgLogOut />
            </div>
          ),
        },
      ],
    },
  ];

  const menuStyle = {
    width: "360px",
    left: "calc(100% - 400px)",
  };

  return (
    <div className="Agentnavbar__container">
      <div>
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
          style={menuStyle}
        />
        <Button
          icon="pi pi-bell p-overlay-badge"
          //   className="mr-2"
          onClick={(event) => menuRight.current.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup
        />
      </div>
      <Menu
        model={Profileitems}
        popup
        ref={menuProfile}
        id="popup_menu_right"
        popupAlignment="right"
        //   style={menuStyle}
      />
      <Button
        className="p-0"
        onClick={(event) => menuProfile.current.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      >
        <Image
          src="https://i.ibb.co/7jx27CN/Mask-group-1.png"
          width="40px"
          height="40px"
          className="navbar__container__profile__image"
        />
      </Button>
    </div>
  );
};

export default AgentNavBar;
