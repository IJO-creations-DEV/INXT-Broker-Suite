import React, { useEffect, useState } from "react";
import SidebarItem from "./SideBarItem";
import SvgAccountIcon from "../../assets/icons/SvgAccountIcon";
import SvgArrow from "../../assets/icons/SvgArrow";
import SvgBackArrow from "../../assets/icons/SvgBackArrow";
import SvgAdd from "../../assets/icons/SvgAdd";
import SvgDownarrows from "../../assets/agentIcon/SvgDownarrows";
import SvgUparrows from "../../assets/agentIcon/SvgUparrows";

const SidebarItemCollapse = ({ item, currentPathname, pathArrayData }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (Array.isArray(pathArrayData) && pathArrayData.includes(item?.name)) {
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
              {item?.name}
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
                pathArrayData={pathArrayData}
              />
            ) : (
              <SidebarItem
                item={childItem}
                key={index}
                isActive={true}
                currentPathname={currentPathname}
                pathArrayData={pathArrayData}
              />
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default SidebarItemCollapse;
