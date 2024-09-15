'use client'
import type { Metadata } from "next";
import "./globals.css";
import { robotoRegular, robotoRegularSemibold } from '../fonts/font'
import Header from "@/components/Headers/header";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoRegular.variable, robotoRegularSemibold.variable}`}>
      <body className='antialiased bg-background'>
        <NextTopLoader
          color="var(--dark-coffee)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0px 0px 0px, 0px 0px 0px"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Header/>
        {children}
      </body>
    </html>
  );
}
