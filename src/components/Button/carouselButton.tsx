
'use client'
import React from "react"
import FeatherIcon from 'feather-icons-react';
interface CarouselBtnProps {
		next?: () => void,
    	previous?: () => void,
		bgColor?: string,
		infinite?: boolean,
		currentSlide?: number,
		totalItem?: number,
		slidesToShow?: number
}
const CarouselButton: React.FC<CarouselBtnProps> = ({previous, next, bgColor = 'bg-white', infinite = true, currentSlide = 0, totalItem = 0}) => {
	return(
		<>
			<div className={`rounded h-auto grid grid-cols-2 divide-x border-none overflow-hidden lg:rounded-md ${bgColor}`}>
				<button onClick={previous} className="py-0.5 px-2 lg:px-3 lg:py-2"><FeatherIcon icon="chevron-left" className={
					`w-[1rem] lg:w-6 ${!infinite && currentSlide == 0 ? 'text-primaryGrayColor' : 'text-primaryTextColor'}`
				}/></button>
				<button onClick={next} className="py-0.5 px-2 lg:px-3 lg:py-2"><FeatherIcon icon="chevron-right" className={
				`w-[1rem] lg:w-6 ${!infinite && currentSlide >= totalItem ? 'text-primaryGrayColor' : 'text-primaryTextColor'}`
				}/></button>
     		</div>
		</>
	)
}

export default CarouselButton;