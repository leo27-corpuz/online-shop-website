interface urlInterface{
	link: string,
	title: string
}
interface BannerType {
  image: string;
  title: string;
  url: urlInterface;
}
export const Banner: BannerType[] = [
	{
		image: 'https://static.vecteezy.com/system/resources/previews/027/806/971/non_2x/t-shirts-mockup-with-text-space-on-colrful-background-hd-ai-free-photo.jpg',
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Availble Here'
		},
	},
	{
		image: 'https://png.pngtree.com/thumb_back/fw800/background/20240217/pngtree-t-shirts-new-collection-vibrant-abstract-text-space-image_15627043.jpg',
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Shop Now'
		},
	},
	{
		image: 'https://valuesdriven.com/cdn/shop/articles/Banner_blogs.jpg?v=1715707047',
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Visit Brand'
		},
	},
	{
		image: 'https://img.freepik.com/premium-photo/sale-50-text-modern-calligraphy-design-print-tshirt-minimalism_1091144-55506.jpg',
		title: 'Level up your style with our summer colllections',
		url: {
			link: '/shop-tshirts',
			title: 'Shop Now'
		},
	},
]