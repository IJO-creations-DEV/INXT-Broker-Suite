import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../DropDowns/index.scss";
import LabelWrapper from "../LabelWrapper";

function DropDowns({
  className,
  options,
  placeholder,
  label,
  optionLabel = "name",
  optionValue,
  value,
  required,
  onChange,
  error,
  textSize,
  textColor,
  classNames,
  overallstyle,
  textWeight,
  disabled,
  dropdownIcon,
  defaultValue
}) {
  console.log(error,"error")
  return (
    <div className={overallstyle}>
      <LabelWrapper
        textSize={textSize}
        textWeight={textWeight}
        textColor={textColor}
        classNames={classNames}
        label={label}
      >
        {required && <span className="required__label">*</span>}
        <Dropdown
          value={value}
          onChange={onChange}
          options={options}
          optionLabel={optionLabel}
          placeholder={placeholder}
          className={className}
          optionValue={optionValue}
          disabled={disabled}
          filter
          dropdownIcon={dropdownIcon}
          defaultValue={defaultValue}
          style={{
            borderRadius:10
          }}
        />
        {error && <div className="formik__error">{error}</div>}
        
      </LabelWrapper>
    </div>
  );
}

export default DropDowns;
