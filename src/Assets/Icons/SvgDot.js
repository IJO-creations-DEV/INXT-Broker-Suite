import * as React from "react";
const SvgDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    fill="none"
    {...props}
  >
    <circle cx={3} cy={3} r={3} fill="#111927" />
  </svg>
);
export default SvgDot;