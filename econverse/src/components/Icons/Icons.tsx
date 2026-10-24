import type { ReactNode, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function createIcon(paths: ReactNode) {
  return function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

export const ShieldIcon = createIcon(
  <>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </>,
);

export const TruckIcon = createIcon(
  <>
    <path d="M3 7h11v9H3z" />
    <path d="M14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.7" />
    <circle cx="17" cy="18" r="1.7" />
  </>,
);

export const CardIcon = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M6 15h4" />
  </>,
);

export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </>,
);

export const BoxIcon = createIcon(
  <>
    <path d="M3 8l2-4h14l2 4v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <path d="M3 8h18M9 13h6" />
  </>,
);

export const HeartIcon = createIcon(
  <path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11z" />,
);

export const UserIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.5 18.5c1.2-2.4 3.2-3.5 5.5-3.5s4.3 1.1 5.5 3.5" />
  </>,
);

export const CartIcon = createIcon(
  <>
    <path d="M3 4h2.5l2 11h10l2-8H7" />
    <circle cx="9" cy="19.5" r="1.2" />
    <circle cx="17" cy="19.5" r="1.2" />
  </>,
);

export const CrownIcon = createIcon(<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" />);

export const ChevronLeftIcon = createIcon(<path d="M15 5l-7 7 7 7" />);
export const ChevronRightIcon = createIcon(<path d="M9 5l7 7-7 7" />);
export const CloseIcon = createIcon(<path d="M5 5l14 14M19 5L5 19" />);
export const MinusIcon = createIcon(<path d="M5 12h14" />);
export const PlusIcon = createIcon(<path d="M5 12h14M12 5v14" />);

export const InstagramIcon = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </>,
);

export const FacebookIcon = createIcon(
  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8z" />,
);

export const LinkedinIcon = createIcon(
  <>
    <rect x="3" y="9" width="3.5" height="12" />
    <circle cx="4.75" cy="5" r="1.75" />
    <path d="M10 9h3.4v1.7c.6-1.1 1.9-2 3.6-2 3 0 4 1.9 4 4.8V21h-3.5v-6.3c0-1.5-.5-2.5-1.8-2.5-1.5 0-2.2 1-2.2 2.6V21H10z" />
  </>,
);
