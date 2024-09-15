import "./globals.css";
import { robotoRegular, robotoRegularSemibold } from '../fonts/font'
import ClientComponent from "./ClientComponent";
import { headers } from 'next/headers'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoRegular.variable, robotoRegularSemibold.variable}`} >
      <body className='antialiased bg-background' >
       <ClientComponent headersData={children}/>
      </body>
    </html>
  );
}
