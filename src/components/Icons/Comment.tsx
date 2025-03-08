import React from "react";

type IconProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

const CommentIcon: React.FC<IconProps> = ({ className, fill, ...rest }) => {
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
      <path
        d="M16.0714 0.642883H1.92854C1.21846 0.642883 0.642822 1.21852 0.642822 1.9286V16.0715C0.642822 16.7815 1.21846 17.3572 1.92854 17.3572H16.0714C16.7815 17.3572 17.3571 16.7815 17.3571 16.0715V1.9286C17.3571 1.21852 16.7815 0.642883 16.0714 0.642883Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="M3.85706 5.78577H10.2856"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="M12.2142 7.71432C13.2793 7.71432 14.1428 6.85087 14.1428 5.78575C14.1428 4.72063 13.2793 3.85718 12.2142 3.85718C11.1491 3.85718 10.2856 4.72063 10.2856 5.78575C10.2856 6.85087 11.1491 7.71432 12.2142 7.71432Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="M14.1428 12.2143H10.2856"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="M6.42848 12.2143H3.85706"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="M8.35716 14.1429C9.42228 14.1429 10.2857 13.2795 10.2857 12.2143C10.2857 11.1492 9.42228 10.2858 8.35716 10.2858C7.29204 10.2858 6.42859 11.1492 6.42859 12.2143C6.42859 13.2795 7.29204 14.1429 8.35716 14.1429Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={fill}
      />
    </svg>
  );
};

export default CommentIcon;
