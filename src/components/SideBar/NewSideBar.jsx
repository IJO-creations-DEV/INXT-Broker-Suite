import React, { useState, useEffect } from "react";
import { menuList } from "./list";
import MenuCard from "./MenuCard";
import "./NewSideBar.scss";
import SidebarItemCollapse from "./SideBarItemCollapse";
import SidebarItem from "./SideBarItem";
import SvgLogo from "../../assets/icons/SvgLogo";
import SvgFinalLogo from "../../assets/icons/SvgFinalLogo";
import findNamesByPath from "../../utility/findSidBarNames";
import { Link, useLocation } from "react-router-dom";

const NewSideBar = () => {
  const location = useLocation();
  const [findPath, setPath] = useState("");
  const [selectedList, setSelectedList] = useState([]);
  const [openSubMenu, setOpenSubMenu] = useState("Master");

  useEffect(() => {
    setPath(location?.path);
    console.log("pathname", location?.path);
    // setOpenSubMenu("")
    const selectedPaths = findNamesByPath(menuList, location?.path);
    setSelectedList([...selectedPaths]);
    // console.log(selectedPaths[0] == menuList[0].name, "tesed data");
    // setOpenSubMenu("Master")
  }, [location]);
  console.log(selectedList[0], "find selected list");

  console.log(openSubMenu, findPath, "sub meny");

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
            <SidebarItemCollapse item={individalMenu} key={index}  />
          ) : (
            <SidebarItem item={individalMenu} key={index} />
          )
        )}
      </ul>
    </div>
  );
};

export default NewSideBar;
