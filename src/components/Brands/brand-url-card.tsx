'use client'
import { robotoRegularBold } from "@/fonts/font";
import Link from 'next/link';
import React from 'react';
import FeatherIcon from "feather-icons-react";
interface imageInterace {
    url: string,
    alt: string
}
interface brandType{
	img: imageInterace,
	title: string,
    url: string
}
const BrandUrlCard: React.FC<brandType> = (props) => {
    return(
        <>
            <div className="brand-url-card-container px-2 py-3 rounded-xl shadow-3xl select-none">
                <img src={props.img.url} alt={props.img.alt} className="mx-auto select-none pointer-events-none" />
                <Link href={props.url} className="select-none" draggable="false">
                    <div className={`text-center mt-2 ${robotoRegularBold.className} text-sm select-none flex justify-center items-center`}>
                        <p>{props.title}</p>
                        <FeatherIcon icon="chevron-right" className="w-4"/>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BrandUrlCard;