import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <g clipPath="url(#demo_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M8 3.833 12.667 8.5 8 13.166" />
      <path
        stroke="#111927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M3.334 8.5h9.333m0 0L8.001 3.833M12.667 8.5l-4.666 4.666"
      />
    </g>
    <defs>
      <clipPath id="demo_svg__a">
        <path fill="#fff" d="M0 .5h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrow;