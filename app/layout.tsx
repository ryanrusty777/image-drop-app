import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Image Shadow Generator",
  description: "Drop image and generate box shadow for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
