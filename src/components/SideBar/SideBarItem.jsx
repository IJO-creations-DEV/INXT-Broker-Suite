import React from 'react';

const SidebarItem = ({ item }) => {
    console.log(item, "item")
    return (
        <li>
            <div>
                {item.icon && <img src={item.icon} alt={item.name} />}
                <span>{item.name}</span>
            </div>
        </li>
    );
};

export default SidebarItem;
