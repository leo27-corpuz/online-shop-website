
'use client'
import React from "react"
import FeatherIcon from 'feather-icons-react';
interface CarouselBtnProps {
		next?: any,
    previous?: any,
		bgColor?: string
}
const CarouselButton: React.FC<CarouselBtnProps> = ({previous, next, bgColor = 'bg-white'}) => {
	return(
		<>
			<div className={`rounded h-auto grid grid-cols-2 divide-x border-none overflow-hidden lg:rounded-md ${bgColor}`}>
				<button onClick={() => previous()} className="py-0.5 px-2 lg:px-3 lg:py-2"><FeatherIcon icon="chevron-left" className="text-textColorInput w-[1rem] lg:w-6"/></button>
				<button onClick={() => next()} className="py-0.5 px-2 lg:px-3 lg:py-2"><FeatherIcon icon="chevron-right" className="text-textColorInput w-[1rem] lg:w-6"/></button>
     </div>
		</>
	)
}

export default CarouselButton;