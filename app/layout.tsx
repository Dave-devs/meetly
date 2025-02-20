import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { VideoContextProvider } from './context/VideoContext';

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEETLY",
  description: "Video calling Platform",
  icons: "./logo.png",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased bg-dark2`}
        >
          <VideoContextProvider>
            {children}
          </VideoContextProvider>
          
        </body>
      </html>
    </ClerkProvider>
    
  );
}
