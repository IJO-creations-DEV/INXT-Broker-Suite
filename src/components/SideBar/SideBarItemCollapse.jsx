import React, { useState } from "react";
import SidebarItem from "./SideBarItem";
import SvgAccountIcon from "../../assets/icons/SvgAccountIcon";
import SvgArrow from "../../assets/icons/SvgArrow";
import SvgBackArrow from "../../assets/icons/SvgBackArrow";
import SvgAdd from "../../assets/icons/SvgAdd";
import SvgDownarrows from "../../assets/agentIcon/SvgDownarrows";

const SidebarItemCollapse = ({ item }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log("first1", isActive);
  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

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
              <SvgDownarrows />
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
              />
            ) : (
              <SidebarItem item={childItem} key={index} isActive={true}  />
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default SidebarItemCollapse;
