import React from 'react';

interface UserCircleIconProps {
  className?: string;
  color?: string;
  size?: number;
}

const UserCircleIcon: React.FC<UserCircleIconProps> = ({ 
  className = '', 
  color = '#9F9F9F',
  size = 32
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
      <g clipPath="url(#clip0_1_32)">
        <path 
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" 
          stroke={color} 
          strokeWidth="2" 
          strokeMiterlimit="10"
        />
        <path 
          d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" 
          stroke={color} 
          strokeWidth="2" 
          strokeMiterlimit="10"
        />
        <path 
          d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_32">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserCircleIcon;
