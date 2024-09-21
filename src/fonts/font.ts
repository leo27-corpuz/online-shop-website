import { Roboto } from 'next/font/google'
const robotoRegular = Roboto({
    weight: '100',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--regular-font',
})
const robotoRegularSemibold = Roboto({
    weight: '700',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-regular-semibild',
})
const robotoRegularBold = Roboto({
	weight: '900',
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-regular-bold',
})


export { robotoRegular, robotoRegularSemibold, robotoRegularBold }