import React from 'react';

interface TruckIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const TruckIcon: React.FC<TruckIconProps> = ({ 
  className = '', 
  color = '#9F9F9F',
  size = 32,
  strokeWidth = 2
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_67)">
        <path 
          d="M30 15H21V12H27.6923C27.8172 12 27.9392 12.0374 28.0427 12.1075C28.1462 12.1775 28.2263 12.2769 28.2727 12.3929L30 15Z" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 18H21" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M23.5 26.875C24.5355 26.875 25.375 26.0355 25.375 25C25.375 23.9645 24.5355 23.125 23.5 23.125C22.4645 23.125 21.625 23.9645 21.625 25C21.625 26.0355 22.4645 26.875 23.5 26.875Z" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10"
        />
        <path 
          d="M8.5 26.875C9.53553 26.875 10.375 26.0355 10.375 25C10.375 23.9645 9.53553 23.125 8.5 23.125C7.46447 23.125 6.625 23.9645 6.625 25C6.625 26.0355 7.46447 26.875 8.5 26.875Z" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10"
        />
        <path 
          d="M20.5 25H11.5" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M6 25H3C2.83424 25 2.67527 24.9342 2.55806 24.8169C2.44085 24.6997 2.375 24.5408 2.375 24.375V9C2.375 8.83424 2.44085 8.67527 2.55806 8.55806C2.67527 8.44085 2.83424 8.375 3 8.375H21.875V21.0019" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M21.875 21.0019V15H30V23.0019C30 23.1677 29.9342 23.3267 29.8169 23.4439C29.6997 23.5611 29.5408 23.625 29.375 23.625H26.5" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_67">
          <rect width={size} height={size} fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default TruckIcon;
