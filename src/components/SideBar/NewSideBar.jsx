import React from 'react'
import { menuList } from "./list";
import MenuCard from './MenuCard';
import "./NewSideBar.scss";
import SidebarItemCollapse from './SideBarItemCollapse';
import SidebarItem from './SideBarItem';


const NewSideBar = () => {
    return (
        // <div>
        //     {menuList?.map((individalMenu) => (
        //         <MenuCard data={individalMenu} />
        //         // <div>
        //         //     {individalMenu?.name}
        //         // </div>
        //     ))}
        // </div>
        <ul className="list">
            <div className="stack">
                <img src="" alt="Logo" className="avatar" />
            </div>
            {
                menuList.map((individalMenu, index) => (
                    individalMenu.submenu ? (
                        <SidebarItemCollapse item={individalMenu} key={index} />
                    ) : (
                        <SidebarItem item={individalMenu} key={index} />
                    )
                ))
            }
        </ul >
    )
}

export default NewSideBar