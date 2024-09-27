interface FeaduredProductType {
	title: string,
	img: string,
	isSale?: boolean, 
	originalPrice?: number | string,
	price: number | string,
	id: any,
	url: string
}
export const FeaturedProduct: FeaduredProductType[] = [
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: true,
		originalPrice: '₱499',
		price: '₱399',
		id: 1,
		url:  '/product/1'
	},
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: true,
		originalPrice: '₱499',
		price: '₱399',
		id: 2,
		url:  '/product/2'
	},
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: false,
		originalPrice: '₱499',
		price: '₱399',
		id: 3,
		url:  '/product/3'
	},
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: true,
		originalPrice: '₱499',
		price: '₱399',
		id: 4,
		url:  '/product/4'
	},
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: true,
		originalPrice: '₱499',
		price: '₱399',
		id: 5,
		url:  '/product/4'
	},
	{
		title: 'Black Shirt',
		img: '/images/products/300x300.png',
		isSale: true,
		originalPrice: '₱499',
		price: '₱399',
		id: 6,
		url:  '/product/4'
	},
]