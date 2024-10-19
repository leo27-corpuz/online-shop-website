'use client'
import React, {useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import BannerLoading from "@/components/Loading/BannerLoadingSkeleton";
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
const CarouselBanner = dynamic(() => import('@/components/Banner/carousel-banner'), { 
	ssr: true,
	loading: () => <BannerLoading />
})
const CarouselBrands = dynamic(() => import('@/components/Brands/carousel-brands'), {
	ssr: true,
	loading: () => <p>Loading top brands...</p>
})
const CarouselProducts = dynamic(() => import('@/components/Product/carousel-products'), {
	ssr: true,
	loading: () => <p>Loading featured products...</p>
})
import NewslettterComponents from "@/components/Newsletter/NewsletterComponent";
import { FeaturedProduct } from "@/fixtures/featured-product"
import { topBrands } from "@/fixtures/top-brands"
import { Banner } from "@/fixtures/banner"
import { BannerContext } from "@/contexts/banner"
import { TopBrandsContext } from "@/contexts/top-brands"
import { FeaturedProductContext } from "@/contexts/featured-product";
const Home: React.FC = () => {
	//top brands
	interface imageInterace {
		url: string,
		alt: string
	}
	interface brandsInterface {
		img: imageInterace,
		title: string
		url: string
	}
	const [brands, setBrands] = useState<brandsInterface[]>([])
	useEffect(() => {
		setBrands(topBrands)
	}, [])

  //feature products
  	interface productsInterface{
		title: string,
		img: string,
		isSale?: boolean, 
		originalPrice?: number | string,
		price: number | string,
		id: number | string,
		url: string
	}
	const [products, setProducts] = useState<productsInterface[]>([])
	useEffect(() => {
		setProducts(FeaturedProduct)
	}, [])
    return(
        <>
			{/* <section className="w-full mx-auto banner-section lg:container lg:px-4">
				<BannerContext.Provider value={Banner}>
					<CarouselBanner />
				</BannerContext.Provider>
			</section>
			<section className="about-products-container container w-full mt-16 md:mt-28 px-4 mx-auto">
				<div className="container mx-auto">
					<div className="mb-8 lg:mb-12 animation-initial-to-fade">
						<h1 className={`text-2xl text-center tracking text-primaryTextColor font-mono-regular-semibold  md:text-3xl lg:text-4xl`}>Transform Your Everyday Look with the Timeless Elegance</h1>
						<p className={["text-center mt-2 text-sm lg:w-2/4 mx-auto", robotoRegular.className].join(" ")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					</div>
					<div className="about-products grid md:grid-cols-3">
						<div className="heart w-full px-4 py-6 bg-[#fcf2e6] min-h-48 md:min-h-64 lg:min-h-72 lg:px-8 lg:py-4 flex items-center animation-initial-to-fade">
							<div>
								<img src="/images/icons/icon.png" alt="icon" className="my-3" />
								<h3 className={["my-3 text-lg tracking-wider", robotoRegularBold.className, 'md:text-xl md:my-4 lg:text-2xl'].join(" ")}>Elegance & Flair</h3>
								<p className={`my-3 text-lightCoffee text-sm tracking-wide md:my-4 ${robotoRegular.className} md:text-base`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi, quod dignissimos possimus recusandae dolores.</p>
							</div>
						</div>
						<div className="quality w-full px-4 py-6 bg-[#edddca] min-h-48 md:min-h-64 lg:min-h-72 lg:px-8 lg:py-4 flex items-center animation-initial-to-fade">
							<div>
								<img src="/images/icons/icon.png" alt="icon" className="my-3" />
								<h3 className={`my-3 text-lg tracking-wider ${robotoRegularBold.className} md:text-xl md:my-4 lg:text-2xl`}>High Quality</h3>
								<p className={`my-3 text-darkCoffee text-sm tracking-wide md:my-4 ${robotoRegular.className} md:text-base`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi, quod dignissimos possimus recusandae dolores.</p>
							</div>
						</div>
						<div className="quality w-full px-4 py-6 bg-[#c4ad91] min-h-48 md:min-h-64 lg:min-h-72 lg:px-8 lg:py-4 flex items-center animation-initial-to-fade">
							<div>
								<img src="/images/icons/icon.png" alt="icon" className="my-3" />
								<h3 className={["my-3 text-lg tracking-wider text-white", robotoRegularBold.className, "md:text-xl md:my-4 lg:text-2xl"].join(" ")}>Material Overload</h3>
								<p className={["my-3 text-[#fcf2e6] text-sm tracking-wide md:my-4", robotoRegular.className, "md:text-base"].join(" ")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi, quod dignissimos possimus recusandae dolores.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="brands-container container w-full mt-16 md:mt-24 px-4 mx-auto">
				<div className="container mx-auto">
					<div className="mb-8 lg:mb-12 animation-initial-to-fade">
						<h1 className={["text-2xl tracking text-primaryTextColor text-center md:text-3xl lg:text-4xl", robotoRegularBold.className].join(" ")}>Top Brands</h1>
						<p className={["text-center mt-2 text-sm lg:w-2/4 mx-auto", robotoRegular.className].join(" ")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					</div>
					<div className="animation-initial-to-fade">
						<TopBrandsContext.Provider value={brands}>
							<CarouselBrands />
						</TopBrandsContext.Provider>
					</div>
				</div>
			</section>
			<section className="featured-products-container container w-full mt-16 md:mt-24 px-4 mx-auto">
				<div className="container mx-auto">
					<div id="featured-product" className="flex justify-between items-center mb-8 lg:mb-12 animation-initial-to-fade">
						<h1 className={["text-2xl tracking text-primaryTextColor md:text-3xl lg:text-4xl", robotoRegularBold.className].join(" ")}>Featured Products</h1>
					</div>
					<div className="animation-initial-to-fade">
						<FeaturedProductContext.Provider value={products}>
							<CarouselProducts/>
						</FeaturedProductContext.Provider>
					</div>
					<div id="featured-footer" className="animation-initial-to-fade"></div>
				</div>
			</section>
			<section className="newsletter-container container w-full mt-16 md:mt-24 px-4 mx-auto">
				<NewslettterComponents />
			</section>
			<section className="mb-24 sm:hidden"></section> */}

			<p className={["text-center mt-2 text-sm lg:w-2/4 mx-auto", robotoRegular.className].join(" ")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </>
    ) 
}
export default Home