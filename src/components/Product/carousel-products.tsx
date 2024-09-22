'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react';
import '../../styles/carousel-product.scss'
import ProductCard from "@/components/Product/product-card";
import CarouselButton from "@/components/Button/carouselButton";
interface ProductType{
	title: string,
	img: string,
	isSale?: boolean, 
	percentSale?: number,
	price: number,
	id: any,
	url: string
}
interface CarouselProductsProps {
	products: ProductType[],
}
const CarouselProducts: React.FC<CarouselProductsProps> = (props) => {
	const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
			partialVisibilityGutter: 240 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:4,
			partialVisibilityGutter: 180 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
			partialVisibilityGutter: 60 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
				customButtonGroup={<ButtonGroup  totalItem={products.length}/>}
			>
				{products.map((data, index) => {
					return(
						<div className={`product-container overflow-hidden`} key={index}>
							<ProductCard 
								title={data.title} 
								img={data.img} 
								isSale={data?.isSale} 
								percentSale={data?.percentSale}  
								price={data.price}
								id={data.id}
								url={data.url}
								height="h-[27rem]"
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
    <>
      <button onClick={() => onClick()} className={`${active ? "active-circle" : "inactive-circle"} circles`}></button>
    </>
  )
}
const ButtonGroup = (props: any) => {
  const { next, previous, carouselState } = props;
  return (
    <div className="carousel-button-group absolute z-50 top-2 right-0 border rounded lg:right-6 lg:top-6 "> 
     <CarouselButton next={next} previous={previous} infinite={false} currentSlide={carouselState.currentSlide} totalItem={props.totalItem}/>
    </div>
  );
};
export default CarouselProducts