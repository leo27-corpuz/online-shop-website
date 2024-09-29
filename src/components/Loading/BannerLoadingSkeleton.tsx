
'use client'
import '../../styles/bannerLoading.scss'
import React from "react"
import BoxesSkeleton from '@/components/Loading/boxesSkeleton';
const BannerLoading: React.FC = () => {
    return(
        <>
            <div className="banner-skeleton-loading overflow-hidden lg:rounded-t-3xl lg:rounded-b-3xl">
                <BoxesSkeleton />
            </div>
        </>
    ) 
}
export default BannerLoading