import React from 'react';

interface EsportesIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const EsportesIcon: React.FC<EsportesIconProps> = ({
  className = '',
  size = 32,
  color = '#9F9F9F'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="62" height="61" fill={color} />
      <defs>
        <pattern id="pattern0_16_1023" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_16_1023" transform="matrix(0.01 0 0 0.0101639 0 -0.00819672)" />
        </pattern>
        <image id="image0_16_1023" width="100" height="100" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>
  );
};

export default EsportesIcon;
