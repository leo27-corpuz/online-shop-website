import { createContext } from 'react';
interface urlInterface{
	link: string,
	title: string
}
interface backgroundInterface{
	mobile: string,
	tablet: string,
	laptop: string,
	desktop: string,
}
interface BannerType {
	background: backgroundInterface;
	title: string;
	url: urlInterface;
}
export const BannerContext = createContext<BannerType[]>([]);