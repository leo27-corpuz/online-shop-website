'use client';
import React from "react"
import Header from "@/components/Headers/header";
import NextTopLoader from 'nextjs-toploader';
interface PropsClient {
    headersData: React.ReactNode;
}
const ClientComponent: React.FC<PropsClient> = ({headersData}) => {
    return (
        <>
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
            <Header />
            <main className="mt-16 lg:mt-28">
            	{headersData }
            </main>
        </>
    )
}
export default ClientComponent