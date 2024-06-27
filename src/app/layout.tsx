import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electric Cars, Solar & Clean Energy",
  description: "Tesla Clone Page",
  icons: [{ rel: 'icon', url: "/favicon.ico" }]
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
      <ChakraProvider>
      {children}
      </ChakraProvider>
      </body>
    </html>
  );
}
