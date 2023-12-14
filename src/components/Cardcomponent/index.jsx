import React from "react";
import { Card } from "primereact/card";
import LabelWrapper from "../LabelWrapper";

const CardComponent = ({
  className,
  backgroundColor,
  backgroundImage,
  borderRadius,
  children,
  textColor,
  disabled,
  onClick,
  label,
  textSize,
  textWeight,
}) => {
  let cardStyle = {
    padding: "10px",
    borderRadius: borderRadius || "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  if (backgroundColor) {
    cardStyle.backgroundColor = backgroundColor;
  }

  if (backgroundImage) {
    cardStyle.backgroundImage = `url(${backgroundImage})`;
  }

  if (textColor) {
    cardStyle.color = textColor;
  }
  const combinedClassName = ` ${disabled ? "disabled" : ""} ${className}`;

  return (
    <LabelWrapper
      textSize={textSize}
      textWeight={textWeight}
      textColor={textColor}
      label={label}
    >
      <Card className={combinedClassName} style={cardStyle} onClick={onClick}>
        {children}
      </Card>
    </LabelWrapper>
  );
};

export default CardComponent;
