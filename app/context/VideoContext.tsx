'use client'

import { createContext } from "react";

interface VideoContextType {
    logo: string;
}

export const VideoContext = createContext<VideoContextType>({
  logo: "/./logo.png",
});

export const VideoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const logo = "/./logo.png";

  const value: VideoContextType = {
    logo,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}