export interface File {
  root: string;
  dir: string;
  base: string;
  ext: string;
  name: string;
  relative: string;
  type: "folder" | "file";
  title: string;
}

export interface Path {
  name: string;
  url: string;
}

export interface Directory {
  directory: string;
  files: File[];
  paths: Path[];
}

export interface AppContextType {
  videoServer: string;
  directory: Directory | null;
  setDirectory: (directory: Directory) => void;
  urlPlayer: string;
  subUrlPlayer?: string;
  setPlayerUrl: (url: string, subUrl?: string) => void;
}
