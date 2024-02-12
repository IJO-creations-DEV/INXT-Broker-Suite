import React, { useState, useEffect } from "react";
import { menuList } from "./list";
import MenuCard from "./MenuCard";
import "./NewSideBar.scss";
import SidebarItemCollapse from "./SideBarItemCollapse";
import SidebarItem from "./SideBarItem";
import SvgLogo from "../../assets/icons/SvgLogo";
import SvgFinalLogo from "../../assets/icons/SvgFinalLogo";
import { useLocation } from "react-router-dom";

const NewSideBar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(currentPathname, "find currentPathname");
  return (
    // <div>
    //     {menuList?.map((individalMenu) => (
    //         <MenuCard data={individalMenu} />
    //         // <div>
    //         //     {individalMenu?.name}
    //         // </div>
    //     ))}
    // </div>
    <div className="sidebar__overall__container">
      <ul className="list">
        <div className="stack">
          <div>
            <SvgFinalLogo />
          </div>
        </div>
        {menuList.map((individalMenu, index) =>
          individalMenu.submenu ? (
            <SidebarItemCollapse
              item={individalMenu}
              key={index}
              currentPathname={currentPathname}
            />
          ) : (
            <SidebarItem
              item={individalMenu}
              key={index}
              currentPathname={currentPathname}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default NewSideBar;
