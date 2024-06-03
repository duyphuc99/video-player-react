interface BackIconProps {
  className?: string;
  onClick: () => void;
}

const BackIcon = (props: BackIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g data-name="play back circle">
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
        <path d="M15 6H7a1 1 0 0 0 0 2h8a3 3 0 0 1 0 6H9.41l1.3-1.29a1 1 0 0 0-1.42-1.42C6 14.57 6.18 14.36 6.08 14.62a1 1 0 0 0 .21 1.09C9.41 18.82 9.42 19 10 19a1 1 0 0 0 .71-1.71L9.41 16H15a5 5 0 0 0 0-10z" />
      </g>
    </svg>
  );
};

export default BackIcon;
