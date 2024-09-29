import { createContext } from 'react';
interface FeaduredProductType {
	title: string,
	img: string,
	isSale?: boolean, 
	originalPrice?: number | string,
	price: number | string,
	id: any,
	url: string
}
export const FeaturedProductContext = createContext<FeaduredProductType[]>([]);