import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "./index.scss";

const InputTextField = ({ value, onChange, label }) => {
  const [focused, setFocused] = useState(false);

  console.log(onChange,"onChange")

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  
  return (
    <div
    style={{ position: "relative" }}
    className={`inputfield__container ${
      focused ? "inputfield__container__changed" : ""
    }`}
  >
      <InputText
        value={value}
        onChange={onChange}
        className="input__field"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label htmlFor="input" className={`label ${focused ? "focused" : ""}`}>
        {label}
      </label>
    </div>
  );
};

export default InputTextField;
