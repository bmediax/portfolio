import "./styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Nav from '@ui/Nav';
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bmediax",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
