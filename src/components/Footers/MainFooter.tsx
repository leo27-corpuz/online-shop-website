
import React from "react"
import Link from "next/link"
import { WebsiteLogo } from '@/fixtures/logo';
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
import FeatherIcon from "feather-icons-react";
const MainFooter: React.FC = () => {
    return (
        <footer className="main-footer">
            <div className="top-footer mx-auto h-auto min-h-[28rem] bg-[#edddca] w-full mt-16 relative md:mt-2">
                <div className="container mx-auto w-full h-full px-4 py-6 lg:grid lg:grid-cols-4 lg:gap-x-10 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-16 lg:px-0">
                    <div className="mini-about">
                        <div className="logo">
                            <Link prefetch={false} href="/"><img className="h-12 object-cover md:w-auto md:h-auto" src={WebsiteLogo.url} alt={WebsiteLogo.alt} /></Link>
                        </div>
                        <p className={`max-w-5xl mt-4 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit</p>
                    </div>
                    <div className="quick-links mt-8 lg:mt-0">
                        <p className={`max-w-5xl text-base text-primaryTextColor lg:text-lg ${robotoRegularBold.className}`}>Quck Links</p>
                        <ul>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><Link href="/">Home</Link></li>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><Link href="/popular">Popular</Link></li>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><Link href="/new-arrival">New arrival</Link></li>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><Link href="/brands">Brands</Link></li>
                        </ul>
                    </div>
                    <div className="quick-links mt-8 lg:mt-0">
                        <p className={`max-w-5xl text-base text-primaryTextColor lg:text-lg ${robotoRegularBold.className}`}>Get in touch</p>
                        <ul>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><a href="mailto:test@gmail.com">test@gmail.com</a></li>
                            <li className={`max-w-5xl mt-1 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}><a href="tel:09818685455">+69818685455</a></li>
                        </ul>
                    </div>
                    <div className="social-media mt-8 lg:mt-0">
                        <p className={`max-w-5xl text-base text-primaryTextColor lg:text-lg ${robotoRegularBold.className}`}>Social Media</p>
                        <p className={`max-w-5xl text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}>Lorem ipsum dolor sit amet consectetur.</p>
                        <ul className="mt-3 flex justify-start gap-2">
                            <li><a href="" target="_blank"><FeatherIcon icon='facebook' className="text-darkCoffee w-[1.4rem]" /></a></li>
                            <li><a href="" target="_blank"><FeatherIcon icon='instagram' className="text-darkCoffee w-[1.4rem]" /></a></li>
                            <li><a href="" target="_blank"><FeatherIcon icon='twitter' className="text-darkCoffee w-[1.4rem]" /></a></li>
                        </ul>
                    </div>
                    <div className="quick-description mt-8 col-span-4 lg:mt-0">
                        <p className={`max-w-5xl mt-2 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?</p>
                        <p className={`max-w-5xl mt-2 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aperiam quae, modi fugit distinctio a?</p>
                     </div>
                </div>
                <hr className="container bg-darkCoffee h-[3px] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
            <div className="bottom-footer mx-auto min-h-20 bg-[#c4ad91] w-full relative">
                <div className="container mx-auto w-full h-full px-4 py-6 lg:flex lg:justify-between lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-0">
                    <ul className="lg:flex lg:gap-4">
                        <li className={`max-w-5xl  text-sm text-primaryTextColor uppercase lg:text-base ${robotoRegular.className}`}><Link href="/termsandcondition">Terms and Conditions</Link></li>
                        <li className={`max-w-5xl  text-sm text-primaryTextColor uppercase lg:text-base ${robotoRegular.className}`}><Link href="/termsandcondition">Privacy Policy</Link></li>
                    </ul>
                    <p className={`max-w-5xl mt-4 text-sm text-primaryTextColor lg:text-base ${robotoRegular.className} lg:mt-0`}>Copyright 2024 @&#169; Leo Online Ecommerce</p>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter