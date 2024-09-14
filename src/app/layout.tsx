import type { Metadata } from "next";
import "./globals.css";
import { robotoRegular } from './fonts/font'
export const metadata: Metadata = {
  title: "Online Shop",
  description: "online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoRegular.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
