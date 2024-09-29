import { createContext } from 'react';
interface imageInterace {
	url: string,
	alt: string
}
interface brandsInterface {
    img: imageInterace,
    title: string,
    url: string
}
export const TopBrandsContext = createContext<brandsInterface[]>([]);