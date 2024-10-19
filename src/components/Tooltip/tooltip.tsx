'use client'
import '../../styles/tooltips.scss'
import React from "react"
interface TooltipProps {
    titleText?: string,
    widthPx?: string,
    leftPx?: string
    topPx?: string,
    display?: boolean
}
const Tooltip: React.FC<TooltipProps> = ({titleText = 'default', widthPx = '32px', leftPx = '-20px', topPx = '20px', display = false}) => {
    return(
        <>
            <div className={`tooltips-container absolute rounded-md py-1 px-2 bg-mainBg transition-all duration-500 ease-in-out pointer-events-none shadow-md ${!display ? 'opacity-0' : 'opacity-1'}`}
             style={{
                width: widthPx,
                left: leftPx,
                top: topPx
              }}
            >
                <p className="text-nowrap text-darkCoffee text-center font-mono-regular">{titleText}</p>
            </div>
        </>
    ) 
}
export default Tooltip