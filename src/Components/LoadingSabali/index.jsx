import React, { Component } from "react";

import { useSpring, animated } from "react-spring";

const LoadingSabali = () => {
  const [props, set] = useSpring(() => ({
    x: 0,
    config: { duration: 5000 }
  }));
  set({ x: 1000 });
  return (
    <animated.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 15.6 15.6"
      background="new 0 0 15.6 15.6;"
      xmlSpace="preserve"
      strokeDashoffset={props.x}
    >
      <path
        className="st0"
        fill="none"
        stroke="#C1827E"
        strokeWidth="1"
        d="M11.9,9.4c-1.2-0.6-2.4-1.1-3.5-1.8C7.7,7.1,7.5,6.6,7.6,5.9c0.1-0.8,0.2-1.8,1.1-2.1
  c1.2-0.4,2.4-0.5,3.6-0.7c1,1.8-0.8,2-1.6,3c1.5,0.4,2.6,1.2,3.6,2.3c0.6,0.7,0.7,1.3,0.4,2.1c-0.3,0.7-0.6,1.2-1.6,1.3
  c-3.8,0.3-7.6,0.7-11.4,1.1c-0.3,0-0.6,0-0.9,0c-0.3-0.7,0.1-1.3,0.3-2C4.7,10.4,8.3,9.9,11.9,9.4z"
      />
    </animated.svg>
  );
};

export default LoadingSabali;
