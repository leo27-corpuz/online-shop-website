'use client'
import React, {useEffect, useState} from "react"
import CarouselBanner from "@/components/Banner/carousel-banner"
import { Banner } from "@/fixtures/banner"
import CarouselProducts from "@/components/Product/carousel-products"
import { FeaturedProduct } from "@/fixtures/featured-product"
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
const Home: React.FC = () => {
  interface productsInterface{
		title: string,
    img: string,
    isSale?: boolean, 
    percentSale?: number,
    price: number,
    id: any,
    url: string
	}
	const [products, setProducts] = useState<productsInterface[]>([])
	useEffect(() => {
		setProducts(FeaturedProduct)
	}, [])
    return(
        <>
          <section className="w-full mx-auto banner-section lg:container lg:px-4">
            <CarouselBanner carouselData={Banner}/>
          </section>
          <section className="top-brands-container container w-full mt-12 px-4 mx-auto">
            <div className="container mx-auto lg:px-8">
              <h1 className={`text-2xl tracking text-primaryTextColor ${robotoRegularBold.className}`}>Featured Products</h1>
              <CarouselProducts products={products}/>
            </div>
          </section>
          <section className="h-[700px]"></section>
        </>
    ) 
}
export default Home