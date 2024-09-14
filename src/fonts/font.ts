import { Roboto } from 'next/font/google'
 
const robotoRegular = Roboto({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-regular',
})

export { robotoRegular }