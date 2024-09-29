'use client'
import React from "react"
import '../../styles/global-loading.css'
const GlobalLoading: React.FC = () => {
    return(
        <>
            <div className="loader-container w-full h-screen relative bg-white">
                <div className="loader absolute left-2/4 top-2/4 translate-x-negative-50 translate-y-negative-50"></div>
            </div>
        </>
    )
}
export default GlobalLoading