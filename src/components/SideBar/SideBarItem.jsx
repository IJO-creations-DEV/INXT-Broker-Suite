import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item, isActive, currentPathname, pathArrayData }) => {
  const Navigate = useNavigate();

  const handleItemClick = (path) => {
    Navigate(path);
  };

  const isPathIncluded =
    Array.isArray(pathArrayData) && pathArrayData.includes(item?.name);
  console.log(isPathIncluded, "find isPathIncluded in text color", item?.name);

  return (
    <li>
      <div>
        {item.icon && <span>{item.icon}</span>}
        <span
          className={"singleitemname__container"}
          onClick={() => handleItemClick(item.path)}
          style={{ color: isPathIncluded ? "white" : "inherit" }}
        >
          {item?.name}
        </span>
      </div>
    </li>
  );
};

export default SidebarItem;
