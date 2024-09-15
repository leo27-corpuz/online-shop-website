import { Roboto } from 'next/font/google'
 
const robotoRegular = Roboto({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-regular',
})
const robotoRegularSemibold = Roboto({
    weight: '700',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-regular-semibild',
})


export { robotoRegular, robotoRegularSemibold }