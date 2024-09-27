
interface imageInterace {
	url: string,
	alt: string
}
interface brandsInterface {
    img: imageInterace,
    title: string,
    url: string
}
export const topBrands: brandsInterface[] = [
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: 'Uniqlo',
        url: 'test',
    },
    {
        img: {
                 url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: 'Adidas',
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: 'Everlane',
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: 'Hanes',
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: "Levi's",
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: "Gap",
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: "Nike",
        url: 'test',
    },
    {
        img: {
            url: '/images/brands/brandlogo.png',
            alt: 'brandlogo'
        },
        title: "Gap",
        url: 'test',
    },
]