import React from "react";

const ThreeDotsLoader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="rgba(255, 255, 255, 0.2)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.7352941176470588s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="rgba(255, 255, 255, 0.4);rgba(255, 255, 255, 0.9999);rgba(255, 255, 255, 0.8);"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="rgba(255, 255, 255, 0.4)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="rgba(255, 255, 255, 0.6)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7352941176470588s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7352941176470588s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="rgba(255, 255, 255, 0.8)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.4705882352941175s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.4705882352941175s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="rgba(255, 255, 255, 0.9999)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.205882352941176s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.205882352941176s"
        ></animate>
      </circle>
    </svg>
  );
};

export default ThreeDotsLoader;
