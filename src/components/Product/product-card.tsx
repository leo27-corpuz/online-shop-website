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
	originalPrice?: number | string,
	price: number | string,
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
				<div className="container-image pointer-events-none relative overflow-hidden">
					{product?.isSale ? <p className="absolute right-[-29px] top-2 font-mono-regular-semibold w-24 text-center py-[1px] bg-[red] rounded text-white text-sm uppercase rotate-45">Sale</p> : ''}
					<img className="image" src={product?.img} alt="" />
				</div>
				<div className="details-container relative">
					<div className="absolute bottom-0 w-full">
						<div className="descriptions pointer-events-none">
							<p className={`text-primaryTextColor text-base ${robotoRegular.className}`}>{product?.title}</p>
							<p className="text-primaryTextColor text-lg font-mono-regular-semibold">
								{product?.price} 
								{product?.isSale ? <span className="text-primaryGrayColor text-sm relative top-[-5px] ml-[1px]">{product.originalPrice}</span> : ''}
							</p>
						</div>
						<div className="actions">
							<div>
								<Link href="/" className="text-primaryTextColor text-base border-b py-1 font-mono-regular-semibold">View Product</Link>
							</div>
							<button className="add-to-cart-button"><FeatherIcon icon="shopping-cart" className="w-[20px] text-darkCoffee" /></button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductCard