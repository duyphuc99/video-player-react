import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import testFileVideo from "../assets/test.mp4";
import fileClient from "../fileClient";

interface VideoPlayerProps {
  url?: string;
  subUrl?: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { url, subUrl } = props;

  const handleSubtitles = async (subUrl: string) => {
    const file = await fileClient.get(subUrl);
    console.log(file.data);
  };

  useEffect(() => {
    if (subUrl) {
      handleSubtitles(subUrl);
    }
  }, [subUrl]);

  return (
    <>
      <StyledVideoPlay>
        {url && (
          <ReactPlayer
            onProgress={(state) => console.log(state)}
            controls
            url={testFileVideo}
            width="100%"
            height="auto"
          />
        )}
      </StyledVideoPlay>
    </>
  );
};

const StyledVideoPlay = styled.div`
  flex: 1;
`;
export default VideoPlayer;
