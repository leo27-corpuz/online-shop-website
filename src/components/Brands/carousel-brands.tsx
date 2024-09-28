'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react';
import '@/styles/carousel-brands.scss'
import BrandUrlCard from "@/components/Brands/brand-url-card";
interface imageInterace {
    url: string,
    alt: string
}
interface brandType{
	img: imageInterace,
	title: string,
    url: string
}
interface CarouselBrandInterface {
	brands: brandType[],
}
const CarouselBrands: React.FC<CarouselBrandInterface> = (props) => {
	const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 6,
			partialVisibilityGutter: 20
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 5, 
			partialVisibilityGutter: 12
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 4,
			partialVisibilityGutter: 15
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2,
			partialVisibilityGutter: 12
        }
    }
    const [brands, setBrands] = useState<brandType[]>([])
	useEffect(() => {
		if(props.brands.length > 0){
			setBrands(props.brands)
		}
	}, [props.brands])
	return(
		<>
			<Carousel 
				responsive={responsive}
				swipeable={true}
				draggable={true}
				showDots={false}
				arrows={false}
				partialVisible={true}
				infinite={true}
                containerClass="carousel-brands-container"
			>
				{brands.map((data, index) => {
					return(
						<div className={`carousel-brand-container select-none`} key={index}>
							<BrandUrlCard title={data.title}  img={data.img} url={data.url}/>
						</div>
					)
				})}
			</Carousel>
		</>
	)
}
export default CarouselBrands