import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SvgFinalLogo from "../../assets/icons/SvgFinalLogo";
import SvgDot from "../../assets/icons/SvgDot";
import { menuList } from "./list";
import "../SideBar/index.scss";
import { Link } from "react-router-dom";
import SvgAccountIcon from "../../assets/icons/SvgAccountIcon";
import SvgMassterIcon from "../../assets/icons/SvgMassterIcon";
import SvgReportsIcon from "../../assets/icons/SvgReportsIcon";
import SvgAgentClientIcon from "../../assets/agentIcon/SvgAgentClientIcon";
import SvgAgentPaymentIcon from "../../assets/agentIcon/SvgAgentPaymentIcon";
import SvgAgentHomeIcon from "../../assets/agentIcon/SvgAgentHomeIcon";
import SvgAgentLeadIcon from "../../assets/agentIcon/SvgAgentLeadIcon";
import SvgAgentItemsIcon from "../../assets/agentIcon/SvgAgentItemsIcon";

const ResponsiveDrawer = () => {
  const [findPath, setPath] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState("");
  const [visible, setVisible] = useState(true);

  const handleNavigation = (navigationPath) => {
    setPath(navigationPath);
    setOpenSubMenu("");
  };

  const handleClick = (name) => {
    setOpenSubMenu(openSubMenu === name ? "" : name);
  };

  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Sidebar
      visible={visible}
      style={{
        backgroundColor: "#1C2536",
        display: visible ? "block" : "none",
        height: "100vh",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      rootStyles={{
        backgroundColor: "#1C2536",
      }}
      onHide={() => setVisible(false)}
    >
      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            marginLeft: "28px",
          }}
        >
          <SvgFinalLogo />
        </div>
        <Menu style={{ backgroundColor: "#1C2536", border: "none" }}>
          {menuList.map((data, index) => (
            <SubMenu
              key={index}
              style={{
                color: "#fff",
                width: "100%",
                paddingLeft: "8px",
                backgroundColor:
                  data.name === openSubMenu ||
                  data.submenu.some((subItem) => subItem.path === findPath)
                    ? "#36435c"
                    : "#1C2536",
              }}
              label={data.name}
              icon={
                data.name === "Accounts" ? (
                  <SvgAccountIcon
                    color={data.name === openSubMenu ? "#6366F1" : "#fff"}
                  />
                ) : data.name === "Petty Cash" ? (
                  <SvgAccountIcon
                    color={data.name === openSubMenu ? "#6366F1" : "#fff"}
                  />
                ) : data.name === "Master" ? (
                  <SvgMassterIcon
                    color={data.name === openSubMenu ? "#6366F1" : "#fff"}
                  />
                ) : data.name === "Reports" || data.name === "Broker" ? (
                  <SvgReportsIcon
                    color={data.name === openSubMenu ? "#6366F1" : "#fff"}
                  />
                ) : null
              }
              onClick={() => handleClick(data.name)}
            >
              {data.submenu.map((subItem, subIndex) => (
                <MenuItem
                  key={subIndex}
                  component={<Link to={subItem.path} />}
                  onClick={() => handleNavigation(subItem.path)}
                >
                  <div className="menu__list">
                    {/* Removed unnecessary nested ternary operators */}
                    {(() => {
                      switch (subItem.name) {
                        case "Home":
                          return <SvgAgentHomeIcon color={subItem.path === findPath ? "#6366F1" : "#9DA4AE"} />;
                        case "Leads":
                        case "Policy":
                          return <SvgAgentLeadIcon color={subItem.path === findPath ? "#6366F1" : "#9DA4AE"} />;
                        case "Clients":
                        case "Quotation":
                          return <SvgAgentClientIcon color={subItem.path === findPath ? "#6366F1" : "#9DA4AE"} />;
                        case "Open Items":
                        case "Claim":
                          return <SvgAgentItemsIcon color={subItem.path === findPath ? "#6366F1" : "#9DA4AE"} />;
                        default:
                          return <SvgAgentPaymentIcon color={subItem.path === findPath ? "#6366F1" : "#9DA4AE"} />;
                      }
                    })()}
                    {/* End of removed nested ternary operators */}
                    <span
                      style={{
                        color: subItem.path === findPath ? "#fff" : "#9DA4AE",
                      }}
                      className="menu__text"
                    >
                      {subItem.name}
                    </span>
                  </div>
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    </Sidebar>
  );
};

export default ResponsiveDrawer;
