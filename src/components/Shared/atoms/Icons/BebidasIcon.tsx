import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const BebidasIcon: React.FC<IconProps> = ({
  size = 32,
  color = "#9F9F9F",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Copo */}
      <path
        d="M7 2h10l-1.5 16.5a2 2 0 0 1-2 1.5h-3a2 2 0 0 1-2-1.5L7 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Canudo */}
      <path
        d="M10 2L9 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BebidasIcon;
