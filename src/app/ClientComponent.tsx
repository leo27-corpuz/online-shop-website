'use client';
import React, { useEffect, useRef } from "react"
import NextTopLoader from 'nextjs-toploader';
import Header from "@/components/Headers/header";
import GlobalLoading from "@/components/Loading/GlobalLoading";
import MainFooter from "@/components/Footers/MainFooter";
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { setMarginbuttom, initialVal } from "@/lib/features/marginButtom";
interface PropsClient {
    headersData: React.ReactNode,
    isLoaded?: boolean,

}
const ClientComponent: React.FC<PropsClient> = ({ headersData, isLoaded = false }) => {
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

            {isLoaded ?
                <HeadMain headersData={headersData}  />
                :
                <GlobalLoading />
            }
        </>
    )
}
const HeadMain: React.FC<PropsClient> = ({ headersData}) => {
    const store = useAppStore()
    const initialized = useRef(false)
    if (!initialized.current) {
      store.dispatch(initialVal())
      initialized.current = true
    }
    const marginButtom = useAppSelector(state => state.marginButtom.marginButtom)
    const dispatch = useAppDispatch()
    useEffect(() => {
        function handleResize() {
            const selectMobileHeader = document.querySelector("#mobile-navigation-container")
            if(selectMobileHeader){
                dispatch(setMarginbuttom(selectMobileHeader.clientHeight))
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch])
    return (
        <>
            <Header />
            <main className="mt-16 md:mt-[5.2rem] lg:mt-28 main-container">
                {headersData}
            </main>
            <MainFooter />
            <section className="sm:hidden" style={{marginBottom: `${marginButtom}px`}}></section>
        </>
    )
}
export default ClientComponent