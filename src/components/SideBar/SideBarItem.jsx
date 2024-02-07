import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item, isActive}) => {
  const Navigate = useNavigate();

  const handleItemClick = (path) => {
    console.log("first",item.path, path);
    Navigate(path);
    
  };
  console.log( isActive, "item");
  return (
    <li>
      <div>
        {item.icon && <span>{item.icon}</span>}
        <span
          className={
               "singleitemname__container"
          }
          onClick={() => handleItemClick(item.path)}
          style={{ color: isActive ? "white" : "inherit" }}
        >
          {item.name}
        </span>
      </div>
    </li>
  );
};

export default SidebarItem;
