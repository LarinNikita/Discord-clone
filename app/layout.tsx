import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";

import type { Metadata } from "next";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord clone",
  description: "Team Chat Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
