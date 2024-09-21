import React from "react"
import CarouselBanner from "@/components/Banner/carousel-banner"
import { Banner } from "@/fixtures/banner"
const Home: React.FC = () => {
    return(
        <>
          <section className="w-full h-[3000px] mx-auto banner-section lg:container lg:px-4">
            <CarouselBanner carouselData={Banner}/>
          </section>
        </>
    ) 
}
export default Home