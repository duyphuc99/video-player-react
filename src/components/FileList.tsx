import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import fileClient from "../fileClient";
import { Directory } from "../types";

const FileList = () => {
  const { directory, setDirectory } = useContext(AppContext);
  const [root, setRoot] = useState<string>("/");

  const getFiles = async (url: string) => {
    const htmlFileContent = await fileClient.get<Directory>(url);
    setDirectory(htmlFileContent.data);
  };

  useEffect(() => {
    getFiles(root);
  }, [root]);

  return (
    <FileListWrapper>
      {directory && (
        <>
          <h3>{directory.directory}</h3>
          <ul>
            {directory.files.map((file) => (
              <li key={file.relative}>
                <a href={file.relative} target="_blank" rel="noreferrer">
                  {file.name}
                </a>
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
