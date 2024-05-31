import React, { useCallback, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import fileClient from "../fileClient";
import { Directory, File } from "../types";
import { Link, useLocation } from "react-router-dom";

const FileList = () => {
  const { directory, setDirectory } = useContext(AppContext);
  const location = useLocation();

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

  return (
    <FileListWrapper>
      {directory && (
        <>
          <h3>{directory.directory}</h3>
          <ul>
            {directory.files
              .filter((i) => isDirectoryOrVideoFile(i))
              .map((file) => (
                <li key={file.relative}>
                  <Link to={file.relative.replace(/\\/g, "/")}>
                    {file.name}
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </FileListWrapper>
  );
};

const FileListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export default FileList;
