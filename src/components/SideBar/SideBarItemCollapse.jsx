import React, { useEffect, useState } from "react";
import SidebarItem from "./SideBarItem";
import SvgAccountIcon from "../../assets/icons/SvgAccountIcon";
import SvgArrow from "../../assets/icons/SvgArrow";
import SvgBackArrow from "../../assets/icons/SvgBackArrow";
import SvgAdd from "../../assets/icons/SvgAdd";
import SvgDownarrows from "../../assets/agentIcon/SvgDownarrows";
import SvgUparrows from "../../assets/agentIcon/SvgUparrows";

const SidebarItemCollapse = ({ item, currentPathname }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log("find isActive", isActive);
  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const findMainMenu = item;
  console.log(item?.name, "find findMainMenu", currentPathname);

  useEffect(() => {
    // this condition for main menu
    if (item?.name.includes("Broker") && currentPathname.includes("agent")) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Master") &&
      currentPathname.includes("master")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Accounts") &&
      currentPathname.includes("accounts")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Reports") &&
      currentPathname.includes("reports")
    ) {
      setCollapsed(true);
    }

    // this condition home action active
    //  else {
    //   if (item?.name.includes("Broker") && currentPathname.includes("/")) {
    //     setCollapsed(true);
    //   }
    // }
    // this condition for sub menu
    if (
      item?.name.includes("Generals") &&
      currentPathname.includes("generals")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Finance") &&
      currentPathname.includes("finance")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Petty Cash") &&
      currentPathname.includes("pettycash")
    ) {
      setCollapsed(true);
    }

    // this condition for child menu
    if (
      item?.name.includes("Organization") &&
      currentPathname.includes("organization")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Insurance Management") &&
      currentPathname.includes("insurancemanagement")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Location") &&
      currentPathname.includes("location")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Employee Management") &&
      currentPathname.includes("employeemanagement")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("User Management") &&
      currentPathname.includes("usermanagement")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Operational Reports") &&
      currentPathname.includes("operationalreports")
    ) {
      setCollapsed(true);
    } else if (
      item?.name.includes("Financial Reports") &&
      currentPathname.includes("Financialreports")
    ) {
      setCollapsed(true);
    }
  }, [currentPathname]);

  return (
    <li>
      <div
        onClick={handleToggleCollapse}
        // className={`sidebar-item ${isActive ? "active" : "deactive"}`}
      >
        <div className="divcontent__sidebar_overall">
          <div className="divcontent__sidebar">
            {item.icon && <span>{item.icon}</span>}
            <span
              className={`itemname__container ${
                isCollapsed ? "collapsed" : ""
              }`}
            >
              {item.name}
            </span>
          </div>
          <div className="divcontent__sidebar">
            <span className="itemarrow__container">
              {isCollapsed === true ? <SvgUparrows /> : <SvgDownarrows />}
            </span>
          </div>
        </div>
      </div>
      {isCollapsed && (
        <ul className="submunusidebar__container">
          {item.submenu.map((childItem, index) =>
            childItem.submenu ? (
              <SidebarItemCollapse
                item={childItem}
                key={index}
                isActive={true}
                currentPathname={currentPathname}
              />
            ) : (
              <SidebarItem
                item={childItem}
                key={index}
                isActive={true}
                currentPathname={currentPathname}
              />
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default SidebarItemCollapse;
