import React from "react";

type IconProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

const BellIcon: React.FC<IconProps> = ({ className, fill, ...rest }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_1383_317)">
        <path
          d="M8.99997 0.642883C10.4628 0.642883 11.8658 1.224 12.9002 2.2584C13.9346 3.2928 14.5157 4.69574 14.5157 6.1586C14.5157 12.2915 16.7528 13.5 17.3571 13.5H0.642822C1.25997 13.5 3.48425 12.2786 3.48425 6.1586C3.48425 4.69574 4.06537 3.2928 5.09977 2.2584C6.13416 1.224 7.53711 0.642883 8.99997 0.642883V0.642883Z"
          stroke="#D9E1F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fill}
        />
        <path
          d="M7.07141 15.8529C7.18255 16.2798 7.43218 16.6578 7.78119 16.9275C8.1302 17.1973 8.55886 17.3437 8.99998 17.3437C9.44111 17.3437 9.86976 17.1973 10.2188 16.9275C10.5678 16.6578 10.8174 16.2798 10.9286 15.8529"
          stroke="#D9E1F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1383_317">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BellIcon;
