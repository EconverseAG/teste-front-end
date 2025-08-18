import React from 'react';

interface MagnifyingGlassIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const MagnifyingGlassIcon: React.FC<MagnifyingGlassIconProps> = ({
  className = '',
  color = '#9F9F9F',
  size = 20,
  strokeWidth = 2
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
};

export default MagnifyingGlassIcon;
