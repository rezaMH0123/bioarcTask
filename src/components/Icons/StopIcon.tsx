import React from "react";

type IconProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

const StopIcon: React.FC<IconProps> = ({ className, fill, ...rest }) => {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <rect x="8.375" y="0.828125" width="4.5" height="15" rx="2" />
      <rect x="0.125" y="0.828125" width="4.5" height="15" rx="2" />
    </svg>
  );
};

export default StopIcon;
