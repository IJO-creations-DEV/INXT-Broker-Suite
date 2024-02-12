import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ item, isActive, currentPathname }) => {
  const Navigate = useNavigate();

  const handleItemClick = (path) => {
    Navigate(path);
  };
  const findPath = item?.includes;
  console.log(item?.includes, "find item main", currentPathname);

  console.log(isActive, "item");
  // const isClaimRequestPath = findPath.some((path) =>
  //   currentPathname.includes(path)
  // );
  const isPathIncluded =
    Array.isArray(findPath) && findPath.includes(currentPathname);

  console.log(isPathIncluded, "find item main 2");
  // console.log(isClaimRequestPath, "find isClaimRequestPath");

  return (
    <li>
      <div>
        {item.icon && <span>{item.icon}</span>}
        <span
          className={"singleitemname__container"}
          onClick={() => handleItemClick(item.path)}
          style={{ color: isPathIncluded ? "white" : "inherit" }}
        >
          {item.name}
        </span>
      </div>
    </li>
  );
};

export default SidebarItem;
