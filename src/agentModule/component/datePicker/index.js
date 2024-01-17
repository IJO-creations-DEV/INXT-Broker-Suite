import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import "./index.scss";
import SvgCalender from "../../../assets/agentIcon/SvgCalender";

const DatepickerField = ({ value, onChange, label }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(!focused);
  };

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div style={{ position: "relative" }} className="datepicker__container">
        <div className="icon__calender"><SvgCalender/></div>
      <Calendar
        value={value}
        onChange={onChange}
        className="datepicker__field"
        onFocus={handleFocus}
        onBlur={handleBlur}
        showIcon
        // icon={<SvgCalender />}
      />
      <label
        htmlFor="datepicker"
        className={`label ${focused || value  ? "focused" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

export default DatepickerField;
