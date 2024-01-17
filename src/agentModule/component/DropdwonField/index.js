import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import "./index.scss";
import SvgDownArrow from "../../../assets/agentIcon/SvgDownArrow";

const DropdownField = ({ value, onChange, options, label, disabled }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div style={{ position: "relative" }} className="dropdown__container">
      <Dropdown
        value={value}
        options={options}
        onChange={onChange}
        className="dropdown__field"
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        dropdownIcon={<SvgDownArrow />}
        // placeholder={focused ? '' : label}
      />
      <label
        htmlFor="dropdown"
        className={`label ${focused || value ? "focused" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default DropdownField;
