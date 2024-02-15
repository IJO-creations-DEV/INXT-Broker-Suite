import React, { useState, useEffect } from "react";
import { menuList } from "./list";
import MenuCard from "./MenuCard";
import "./NewSideBar.scss";
import SidebarItemCollapse from "./SideBarItemCollapse";
import SidebarItem from "./SideBarItem";
import SvgLogo from "../../assets/icons/SvgLogo";
import SvgFinalLogo from "../../assets/icons/SvgFinalLogo";
import { useLocation } from "react-router-dom";
import findNamesByPath from "../../utility/findSidBarNames";

const NewSideBar = () => {
  const location = useLocation();
  const [pathArrayData, setPathArrayData] = useState([]);
  const currentPathname = location?.pathname;

  useEffect(() => {
    const pathArrayData = findNamesByPath(menuList, location?.pathname);
    console.log(pathArrayData, "find pathArrayData");
    setPathArrayData(pathArrayData);
  }, [currentPathname]);
 
  return (
  
    <div className="sidebar__overall__container">
      <ul className="list">
        <div className="stack">
          <div>
            <SvgFinalLogo />
          </div>
        </div>
        {Array.isArray(pathArrayData) && pathArrayData?.length > 1 && (
          <>
            {menuList.map((individalMenu, index) =>
              individalMenu.submenu ? (
                <SidebarItemCollapse
                  item={individalMenu}
                  key={index}
                  currentPathname={currentPathname}
                  pathArrayData={pathArrayData}
                />
              ) : (
                <SidebarItem
                  item={individalMenu}
                  key={index}
                  currentPathname={currentPathname}
                  pathArrayData={pathArrayData}
                />
              )
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default NewSideBar;
