import "@radix-ui/themes/styles.css";
import "../styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";

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
        <NextUIProvider>
          <Theme>{children}</Theme>
        </NextUIProvider>
      </body>
    </html>
  );
}
