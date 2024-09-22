'use client'
import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import '../../styles/product-card.scss'
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
interface ProductCardProps {
	title: string,
	img: string,
	isSale?: boolean, 
	percentSale?: number,
	price: number,
	id: any,
	url: string,
	height: string
}
const ProductCard: React.FC<ProductCardProps> = (props) => {
	const [product, setProduct] = useState<ProductCardProps|null>(null)
	useEffect(() => {
		setProduct(props)
	}, [])
	return(
		<>
			<div className={`card-container ${props.height}`}>
				<div className="container-image">
					{product?.isSale || <p>Sale</p>}
					<img className="image" src={product?.img} alt="" />
				</div>
				<div className="details-container">
					<div className="descriptions">
						<p className={`text-primaryTextColor text-base ${robotoRegular.className}`}>{product?.title}</p>
						<p className="text-primaryTextColor text-lg font-mono-regular-semibold">${product?.price} <span className="text-primaryGrayColor text-sm relative top-[-5px]">$85</span></p>
					</div>
					<div className="actions">
						<div>
							<Link href="/" className="text-primaryTextColor text-base border-b py-1 font-mono-regular-semibold">View Product</Link>
						</div>
						<button className="add-to-cart-button"><FeatherIcon icon="shopping-cart" className="w-[20px] text-darkCoffee" /></button>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductCard