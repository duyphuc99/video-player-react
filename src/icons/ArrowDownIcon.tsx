interface ArrowDownIconProps {
  className?: string;
}

const ArrowDownIcon = (props: ArrowDownIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
    </svg>
  );
};

export default ArrowDownIcon;