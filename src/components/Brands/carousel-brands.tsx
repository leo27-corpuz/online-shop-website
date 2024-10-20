'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState, useContext } from 'react';
import { createPortal } from "react-dom";
import '@/styles/carousel-brands.scss'
import BrandUrlCard from "@/components/Brands/brand-url-card";
import { TopBrandsContext } from "@/contexts/top-brands";
import CarouselButton from "@/components/Button/carouselButton";
interface imageInterace {
	url: string,
	alt: string
}
interface brandType {
	img: imageInterace,
	title: string,
	url: string
}
const CarouselBrands: React.FC = () => {
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
	const contextBrandsData = useContext(TopBrandsContext);
	const [brands, setBrands] = useState<brandType[]>([])
	useEffect(() => {
		if (contextBrandsData.length > 0) {
			setBrands(contextBrandsData)
		}
	}, [contextBrandsData])
	return (
		<>
			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={true}
				showDots={false}
				arrows={false}
				partialVisible={true}
				infinite={true}
				customButtonGroup={<ButtonGroup />}
				containerClass="carousel-brands-container"
			>
				{brands.map((data, index) => {
					return (
						<div className={`carousel-brand-container select-none`} key={index}>
							<BrandUrlCard title={data.title} img={data.img} url={data.url} />
						</div>
					)
				})}
			</Carousel>
		</>
	)
}


interface ButtonGroupProps {
	previous?: () => void;
	next?: () => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	const { next, previous } = props;
	return (
		createPortal(<div className="carousel-button-group border rounded "> 
			<CarouselButton next={next} previous={previous} />
		</div>,
			document.getElementById('top-brand-btn') as HTMLElement
		)
	);
};
export default CarouselBrands