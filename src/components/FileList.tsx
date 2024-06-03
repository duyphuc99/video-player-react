import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import fileClient from "../fileClient";
import { Directory, File, Path } from "../types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import VideoIcon from "../icons/VideoIcon";
import BackIcon from "../icons/BackIcon";

const FileList = () => {
  const { directory, setDirectory, setPlayerUrl, videoServer } =
    useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const getFiles = useCallback(
    async (url: string) => {
      const htmlFileContent = await fileClient.get<Directory>(url);
      setDirectory(htmlFileContent.data);
    },
    [setDirectory]
  );

  console.log(directory);

  useEffect(() => {
    getFiles(location.pathname);
  }, [location, getFiles]);

  const isDirectoryOrVideoFile = (file: File) => {
    return (
      file.type === "folder" ||
      (file.type === "file" && ["mp4", "webm"].includes(file.ext))
    );
  };

  const hasPreviousDirectory = (paths: Path[]) => {
    return paths.length > 1;
  };

  const handleVideoPlay = (files: File[], videoFile: File) => {
    const subtitleFile = files.find(
      (file) =>
        file.type === "file" &&
        file.ext === "srt" &&
        file.name === videoFile.name
    );
    setPlayerUrl(
      videoServer + videoFile.relative,
      subtitleFile?.relative ? videoServer + subtitleFile.relative : undefined
    );
  };

  return (
    <FileListWrapper>
      {directory && (
        <>
          <StyledHeader>
            <ArrowDownIcon />
            <StyledTextFolder>
              {directory.paths[directory.paths.length - 1].name}
            </StyledTextFolder>
            {hasPreviousDirectory(directory.paths) && (
              <StyledBackIcon
                onClick={() => {
                  navigate(directory.paths[directory.paths.length - 2].url);
                }}
              />
            )}
          </StyledHeader>
          <StyledFileList>
            {directory.files
              .filter((i) => isDirectoryOrVideoFile(i))
              .map((file) => (
                <FileItem key={file.relative}>
                  <LinkStyled
                    to={file.relative.replace(/\\/g, "/")}
                    onClick={(e) => {
                      if (file.type === "file") {
                        e.preventDefault();
                        handleVideoPlay(directory.files, file);
                      }
                    }}
                  >
                    {file.type === "folder" ? (
                      <StyledArrowRightIcon />
                    ) : (
                      <StyledVideoIcon />
                    )}
                    <StyledTextFolder>{file.name}</StyledTextFolder>
                  </LinkStyled>
                </FileItem>
              ))}
          </StyledFileList>
        </>
      )}
    </FileListWrapper>
  );
};

const StyledVideoIcon = styled(VideoIcon)`
  width: 16px;
  height: 16px;
`;

const StyledHeader = styled.h4`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  width: 24px;
`;

const FileListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-left: 1px solid #ccc;
  padding: 20px 10px;
`;

const StyledFileList = styled.ul`
  padding: 0 25px;
`;

const LinkStyled = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  transition: 100ms;
  &:hover {
    color: #3c66ff;
  }
`;
const FileItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyledTextFolder = styled.p`
  margin-left: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
`;

const StyledBackIcon = styled(BackIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default FileList;
