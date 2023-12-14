import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import "./index.scss";
import { options } from "./mock";

function MultipleSelectRadioGroup({
  options,
  onChange,
  selectedValues,
  border,
  labelColor,
  isDisabled,
  isChecked,
  isRequired,
}) {
  const handleOptionChange = (e) => {
    const selectedValue = e.value;
    const updatedValues = [...selectedValues];

    if (updatedValues.includes(selectedValue)) {
      updatedValues.splice(updatedValues.indexOf(selectedValue), 1);
    } else {
      updatedValues.push(selectedValue);
    }

    onChange(updatedValues);
  };

  const style = {};

  if (border) {
    style.border = "2px solid #FFFF00";
  }

  if (labelColor) {
    style.color = "red";
  }

  return (
    <div>
      {options.map((option) => (
        <div key={option.value} className="p__fieldradio__button" style={style}>
          <RadioButton
            className="options__style"
            inputId={option.value}
            name={option.name}
            value={option.value}
            onChange={handleOptionChange}
            checked={isChecked && selectedValues.includes(option.value)}
            disabled={isDisabled}
            required={isRequired}
          />
          <label className="label__wrapper" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectionChange = (selectedValues) => {
    setSelectedValues(selectedValues);
  };

  return (
    <div>
      <h2>Multiple Select Radio Buttons</h2>
      <MultipleSelectRadioGroup
        options={options}
        onChange={handleSelectionChange}
        selectedValues={selectedValues}
        border={false}
        labelColor={false}
        isDisabled={false}
        isChecked={true}
        isRequired={false}
      />
      <div className="selected__value">
        Selected Values: {selectedValues.join(", ")}
      </div>
    </div>
  );
}
