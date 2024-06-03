import React, { useState } from "react";
import styled from "styled-components";
import FileList from "./components/FileList";
import { AppContextType, Directory } from "./types";
import { BrowserRouter } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

function App() {
  const [directory, setDirectory] = useState<Directory | null>(null);
  const [urlPlayer, setUrlPlayer] = useState<string>("");
  const [subUrlPlayer, setSubUrlPlayer] = useState<string | undefined>();

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          videoServer: "http://localhost:3000",
          directory,
          setDirectory,
          urlPlayer,
          subUrlPlayer,
          setPlayerUrl: (url: string, subUrl?: string) => {
            setUrlPlayer(url);
            setSubUrlPlayer(subUrl);
          },
        }}
      >
        <AppWrapper>
          <VideoPlayer url={urlPlayer} subUrl={subUrlPlayer} />
          <FileList />
        </AppWrapper>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export default App;
