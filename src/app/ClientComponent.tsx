'use client';
import React from "react"
import NextTopLoader from 'nextjs-toploader';
// import Header from "@/components/Headers/header";
import GlobalLoading from "@/components/Loading/GlobalLoading";
interface PropsClient {
    headersData: React.ReactNode,
    isLoaded?: boolean
}
const ClientComponent: React.FC<PropsClient> = ({headersData, isLoaded = false}) => {
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

            { isLoaded ? 
                <HeadMain headersData={headersData}/>
            : 
                <GlobalLoading />
            }
        </>
    )
}
const HeadMain: React.FC<PropsClient> = ({headersData}) => {
    return (
        <>
            {/* <Header /> */}
            <main className="mt-16 lg:mt-28 main-container">
                {headersData}
            </main>
        </>
    )
}
export default ClientComponent