interface VideoIconProps {
  className?: string;
}
const VideoIcon = (props: VideoIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g data-name="24.Play">
        <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
        <path d="M9 16.766V7.234L16.944 12zm2-6v2.468L13.056 12z" />
      </g>
    </svg>
  );
};

export default VideoIcon;
