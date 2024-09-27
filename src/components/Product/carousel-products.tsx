'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react';
import '../../styles/carousel-product.scss'
import ProductCard from "@/components/Product/product-card";
import CarouselButton from "@/components/Button/carouselButton";
import { createPortal } from "react-dom";
interface ProductType{
	title: string,
	img: string,
	isSale?: boolean, 
	originalPrice?: number | string,
	price: number | string,
	id: any,
	url: string
}
interface CarouselProductsProps {
	products: ProductType[],
}
const CarouselProducts: React.FC<CarouselProductsProps> = (props) => {
	const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
			partialVisibilityGutter: 10 
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items:3,
			partialVisibilityGutter: 20 
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
			partialVisibilityGutter: 40 
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
			partialVisibilityGutter: 60 
    }
  }
	const [products, setProducts] = useState<ProductType[]>([])
	useEffect(() => {
		if(props.products.length > 0){
			setProducts(props.products)
		}
	}, [props.products])
	
	const [heightImage, setHeightImage] = useState<string>('h-[27rem]');
	useEffect(() => {
		function handleResize() {
			if(window.innerWidth < 1024){
				setHeightImage('h-[27rem]')
			}
			else if(window.innerWidth >= 1024 && window.innerWidth < 1280){
				setHeightImage('h-[28rem]')
			}
			else if(window.innerWidth >= 1280 && window.innerWidth < 1536){
				setHeightImage('h-[29rem]')
			}
			else if(window.innerWidth >= 1536){
				setHeightImage('h-[30rem]')
			}
		}
		handleResize();
		window.addEventListener("resize", handleResize);	
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [])
	return(
		<>
			<Carousel 
				responsive={responsive}
				partialVisible={true}
				swipeable={true}
				draggable={true}
				showDots={true}
				arrows={false}
				customDot={<CustomDot />}
				customButtonGroup={<ButtonGroup />}
				minimumTouchDrag={20}
			>
				{products.map((data, index) => {
					return(
						<div className={`product-container overflow-hidden select-none`} key={index}>
							<ProductCard 
								title={data.title} 
								img={data.img} 
								isSale={data.isSale} 
								originalPrice={data?.originalPrice}  
								price={data.price}
								id={data.id}
								url={data.url}
								height={heightImage}
							/>
						</div>
					)
				})}
			</Carousel>
		</>
	)
}
const CustomDot: React.FC = ({active, onClick}: any) => {
  return(
    createPortal(
      <button onClick={() => onClick()} className={`${active ? "active-circle" : "inactive-circle"} circles`}></button>,
      document.getElementById('featured-footer') as HTMLElement
    )
  )
}
const ButtonGroup = (props: any) => {
  const { next, previous, carouselState} = props;
	const { totalItems, currentSlide, slidesToShow} = carouselState;
  return (
    createPortal(
      <div className="carousel-button-group border rounded "> 
        <CarouselButton next={next} previous={previous} infinite={false} currentSlide={currentSlide} totalItem={totalItems - slidesToShow} />
      </div>,
      document.getElementById('featured-product') as HTMLElement
    )
  );
};
export default CarouselProducts