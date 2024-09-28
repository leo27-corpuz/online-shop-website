'use client'
import "./globals.css";
import { robotoRegular, robotoRegularSemibold } from '../fonts/font'
import ClientComponent from "./ClientComponent";
import { usePathname } from 'next/navigation'
import { WebsiteLogo } from "@/fixtures/logo";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const pathname = `${usePathname().split('/')[1]}`;
  const [title, setTitle] = useState<string>('Shop')
  useEffect(() => {
    if(pathname == ''){
      setTitle('Shop | Home')
    }else{
      const title: string = `${pathname[0].toUpperCase()}${pathname.slice(1, pathname.length)}`
      setTitle(`Shop | ${title}`)
    }
  }, [pathname])
  return (
    <html lang="en" className={`${robotoRegular.variable, robotoRegularSemibold.variable}`} >
      <head>
        <link rel="icon" href={WebsiteLogo.url} sizes="32x32" />
        <title>{title}</title>
      </head>
      <body className='antialiased bg-background' >
       <ClientComponent headersData={children}/>
      </body>
    </html>
  );
}
