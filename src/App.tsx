import React, { useState } from "react";
import styled from "styled-components";
import FileList from "./components/FileList";
import { AppContextType, Directory } from "./types";

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

function App() {
  const [directory, setDirectory] = useState<Directory | null>(null);
  return (
    <AppContext.Provider value={{ directory, setDirectory }}>
      <AppWrapper>
        <VideoPlayWrapper> </VideoPlayWrapper>
        <FileList />
      </AppWrapper>
    </AppContext.Provider>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const VideoPlayWrapper = styled.div`
  flex: 1;
`;

export default App;
