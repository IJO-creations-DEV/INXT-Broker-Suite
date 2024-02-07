import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import "./index.scss";
import SvgDownArrow from "../../../assets/agentIcon/SvgDownArrow";

const DropdownField = ({
  value,
  onChange,
  options,
  label,
  disabled,
  optionLabel,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  console.log("first", options);
  return (
    <div
      style={{ position: "relative" }}
      className={`dropdown__container ${
        focused ? "dropdown__container__changed" : ""
      }`}
    >
      <Dropdown
        value={value}
        options={options}
        onChange={onChange}
        className="dropdown__field"
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        dropdownIcon={<SvgDownArrow />}
        optionLabel={optionLabel}
        // placeholder={focused ? '' : label}
      />
      <label
        htmlFor="dropdown"
        className={`label ${focused || value !== "" ? "focused" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default DropdownField;
