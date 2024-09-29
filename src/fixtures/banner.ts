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
export const Banner: BannerType[] = [
	{
		background: {
			mobile: '/images/banners/400x600.png',
			tablet: '/images/banners/800x400.png',
			laptop: '/images/banners/1024x600.png',
			desktop: '/images/banners/1400x700.png'
		},
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Availble Here'
		},
	},
	{
		background: {
			mobile: '/images/banners/400x600.png',
			tablet: '/images/banners/800x400.png',
			laptop: '/images/banners/1024x600.png',
			desktop: '/images/banners/1400x700.png'
		},
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Shop Now'
		},
	},
	{
		background: {
			mobile: '/images/banners/400x600.png',
			tablet: '/images/banners/800x400.png',
			laptop: '/images/banners/1024x600.png',
			desktop: '/images/banners/1400x700.png'
		},
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Visit Brand'
		},
	},
	{
		background: {
			mobile: '/images/banners/400x600.png',
			tablet: '/images/banners/800x400.png',
			laptop: '/images/banners/1024x600.png',
			desktop: '/images/banners/1400x700.png'
		},
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Shop Now'
		},
	},
	{
		background: {
			mobile: '/images/banners/400x600.png',
			tablet: '/images/banners/800x400.png',
			laptop: '/images/banners/1024x600.png',
			desktop: '/images/banners/1400x700.png'
		},
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Shop Now'
		},
	},
]