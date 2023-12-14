import React from "react";
import SvgGoBack from "../../Assets/Icon/SvgGoBack";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const GobackComponent = ({
  textvalue,
  width,
  height,
  fill,
  textSize,
  textColor,
  backnavigation
}) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(backnavigation);
  };
  const nameStyle = {
    fontSize: textSize ? textSize : "18px",
    color: textColor ? textColor : "#000000",
    fontFamily: "Poppins",
    fontWeight: 400,
  };
  return (
    <div className="flex align-items-center route_selector">
      <div
        onClick={handleGoBack}
        className="flex align-items-center click_button"
      >
        <SvgGoBack width={width} height={height} fill={fill} />
        <p className="m-0 pl-2" style={nameStyle}>
          {textvalue ? textvalue : "Back"}
        </p>
      </div>
    </div>
  );
};

export default GobackComponent;
