import React from "react";

function Backgrounddsn1(props) {
  return (
    <svg
      className="background-design"
      width={props.width}
      height={props.height}
      viewBox="0 0 290 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="145" cy="145" r="145" fill={`url(#${props.color})`} />
      <defs>
        <radialGradient
          id={props.color}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(145 145) rotate(90) scale(145)"
        >
          <stop stop-color={"#"+props.color} stop-opacity="0.6" />
          <stop offset="1" stop-color={"#"+props.color} stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Backgrounddsn1;
