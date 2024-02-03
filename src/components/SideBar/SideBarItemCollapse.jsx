import React, { useState } from 'react';
import SidebarItem from './SideBarItem';

const SidebarItemCollapse = ({ item, isActive }) => {
    const [isCollapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <li>
            <div
                onClick={handleToggleCollapse}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
            >
                {item.icon && <img src={item.icon} alt={item.name} />}
                <span>{item.name}</span>
            </div>
            {isCollapsed && (
                <ul>
                    {item.submenu.map((childItem, index) => (
                        childItem.submenu ? (
                            <SidebarItemCollapse
                                item={childItem}
                                key={index}
                                isActive={true}
                            />
                        ) : (
                            <SidebarItem
                                item={childItem}
                                key={index}
                                isActive={isActive}
                            />
                        )
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SidebarItemCollapse;
