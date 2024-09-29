'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React,  { useState, useContext } from "react";
import Link from 'next/link'
import '../../styles/banner.scss'
import FeatherIcon from 'feather-icons-react';
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
import CarouselButton from "@/components/Button/carouselButton";
import { BannerContext } from "@/contexts/banner";
const CarouselBanner: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const carouselData = useContext(BannerContext);
    return(
        <>
          <Carousel
           swipeable={true}
           draggable={true}
           showDots={true}
           responsive={responsive}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={6000}
           keyBoardControl={true}
           transitionDuration={0}
           arrows={false}
           customDot={<CustomDot />}
           customButtonGroup={<ButtonGroup />}
           containerClass="carousel-container z-0"
           dotListClass="custom-dot-list-style"
           itemClass="carousel-item-padding-40-px"
          >
            {carouselData.map((data, index) => {
              return <div className="banner-list" key={index}>
                      <div className="banner-background-image">
                        <img src={data.background.mobile} alt="" className="banner-image mobile md:hidden"/>
                        <img src={data.background.tablet} alt="" className="banner-image tablet hidden md:block lg:hidden"/>
                        <img src={data.background.laptop} alt="" className="banner-image laptop hidden lg:block 2xl:hidden"/>
                        <img src={data.background.desktop} alt="" className="banner-image desktop hidden 2xl:block"/>
                      </div>
                      <div className="content-container">
                        <div className="title-container">
                          <h1 className={`text-center text-2xl text-white leading-8 tracking-wider text-shadow-default pointer-events-none sm:leading-snug md:leading-none lg:leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl ${robotoRegularBold.className}`}>{data.title}</h1>
                        </div>
                        <div className="button-container mt-6 ml-auto mr-auto text-center sm:mt-8 lg:mt-12">
                          <Link href={data.url.link}>
                            <button className="mx-auto py-2 px-4 font-mono-regular-semibold tracking-wide text-sm text-textColorInput border-none rounded lg:rounded-3xl bg-mainBg cursor-pointer flex gap-1 items-center justify-center sm:px-6 md:px-8">
                              <p>{data.url.title}</p>
                              <FeatherIcon icon="arrow-right" className="text-textColorInput w-4"/>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
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
  const { next, previous } = props;
  return (
    <div className="carousel-button-group absolute z-50 top-4 right-4 lg:right-6 lg:top-6 "> 
     <CarouselButton next={next} previous={previous}/>
    </div>
  );
};
export default CarouselBanner;