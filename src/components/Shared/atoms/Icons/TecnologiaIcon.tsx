import React from 'react';

interface TecnologiaIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const TecnologiaIcon: React.FC<TecnologiaIconProps> = ({
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
        <pattern id="pattern0_16_1021" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_16_1021" transform="matrix(0.01 0 0 0.0101639 0 -0.00819672)" />
        </pattern>
        <image id="image0_16_1021" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECUlEQVR4nO2dTW7TQBjFB0QRbBosILCALRu2/HYJu61KN1SRWLAL/OslxJE6E9v1k+Tx9z1pJKetY//8zjfz7Yx6iOXcvhzYsLh5eJAGIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELsQrpvnRv7x+O7kgfpvnH1T0q2nV4/Hq9U3f0r5dJYs22mE7qM1IhA2s3F5P64kUq1G7eSHMl5gXhpY3/c/0HGymWyfWPOzQ/jDwGhB8YatGaLOqTM9u7zQZaUzgqy5RLjFT8d70++5HhAEFgwXBCqmOZMiLGEEGO4IFQxzY0gQwkhhBDDhfKE+FGb4P6eBSlWX+YqwT0hfhRW8GFyLLBgh/C+6I4bfYJgnP8JJKQM6eyfD1dIFwQNKOyE8P+7I6QLQggxhgsSFhPip8kZl58uCJ4Qb42p7oj5B3qNFytHSBnE48LhgvCE8IT0TUgXhBBCCCGEmLb1s9RJGhUGQqQM4nHhcEEwTgjvjr5NyLtLJkCNy/Vdm58W7O4iQgghhBBCCKHb1s9SJ2lUGAiRMojHhcMFwTghvDv6NiF4Qnhy0m/eJaQLQggghBBCyIR0QdCAwk4I/7874XLhdEFyGRO4i3RB8E4Ifpy/E9IG8bhwuCBYQpZJaJsEb5PBCP9ujlsXhBBCCCGEkInpgrDu6JsE74w1ft8c3g0hZRCPC4cLgmeI70xsmyzcBaGIaTctO4cQQgghZG8SvEOKlUFqnEDQ4LZBVgxM8/4O3iJlh4kUQgghhBBCyN5K8A4pVgbJKQoC/JHo52WcXGH/TyI7t+aFwwUhhBBCCCGEhJfgHVKsDJJTFOCcHdccvZf0Qw4Pjjf6BeqfAAzI7NMZf49yWOz9CJtO4CLlNMbhwuGCEEIIIYQQQooSwltk8JJOF2Ttt+CdG78LggZUfEJcqvhCmhMX5PLm3YB/7hwfSycGC7YXVBQEQEa7b8wh+DsOTbcxnvEP3tBGmNfxSOwbf6r4QrKo4gs5TfGFNOVQIvwfYO+2/vcOPSKw8HzpBh2w4qFsXkGNjJ6UWEpMBMhV8YXYLKZfyKnv3eXAhsXNw4M0CCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE7E26b5wbX+b8f/i9d0IUvz4JnZ5WjdDrFklI+/j+zNdJLGXLJJb6MRd2wFzEPLu5efwB8ezm5vEH8OZd+IEbPthQCWJf5r4gF/6+/fKmfTCvxz+PjPOkxnlSdP54kn8BXWu4PGrZe3MAAAAASUVORK5CYII=" />
      </defs>
    </svg>
  );
};

export default TecnologiaIcon;
