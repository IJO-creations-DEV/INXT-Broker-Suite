import React from "react";

const LabelWrapper = ({
  label,
  children,
  textSize,
  textColor,
  required,
  className,
  classNames,
  textWeight,
}) => {
  const labelStyle = {
    fontSize: textSize ? textSize : "14px",
    color: textColor ? textColor : "black",
    fontFamily: "Inter var",
    fontWeight: textWeight ? textWeight : 500,
  };

  return (
    <div className={className}>
      <label style={labelStyle} className={classNames}>
        {label}
      </label>
      {required && <span className="required-marker">*</span>}
      {children}
    </div>
  );
};

export default LabelWrapper;
