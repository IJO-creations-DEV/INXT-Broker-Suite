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
    fontSize: textSize ? textSize : "20px",
    color: textColor ? textColor : "black",
    fontFamily: "Poppins",
    fontWeight: textWeight ? textWeight : 300,
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
