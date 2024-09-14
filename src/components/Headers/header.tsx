import Link from 'next/link'
import FeatherIcon from 'feather-icons-react';
import { usePathname } from 'next/navigation'
import '../../styles/header.scss'
import { useEffect } from 'react';

interface MyButtonProps {
	Responsiveness: string;
}
const Header = ({Responsiveness = 'mobile'}: MyButtonProps) => {
	const pathname = `/${usePathname().split('/')[1]}`
  return(
		<>
			<header className="header-container container fixed bottom-4 w-full left-1/2 translate-x-[-50%] px-4">
				<ul className="ul-list flex justify-between items-center w-full px-[40px] py-1 rounded-[50px] bg-white shadow-3xl">
					<li className={`${pathname === '/' ? 'active relative top-[-20px] shadow-md' : 'top-0'} rounded-full p-3 transition-all ease-in-out duration-700`}>
						<Link href={{ pathname: '/'}} className=""><FeatherIcon icon="home" /></Link>
					</li>
					<li className={`${pathname === '/cart' ? 'active relative top-[-20px] shadow-md' : 'top-0'} rounded-full p-3 transition-all ease-in-out duration-700`}>
						<Link href={{ pathname: '/cart'}}	className=""><FeatherIcon icon="shopping-cart" /></Link>
					</li>
					<li className={`${pathname === '/favorite' ? 'active relative top-[-20px] shadow-md' : 'top-0'} rounded-full p-3 transition-all ease-in-out duration-700`}>
						<Link href={{ pathname: '/favorite'}}	className=""><FeatherIcon icon="heart" /></Link>
					</li>
					<li className={`${pathname === '/account' ? 'active relative top-[-20px] shadow-md' : 'top-0'} rounded-full p-3 transition-all ease-in-out duration-700`}>
						<Link href={{ pathname: '/account'}}	className=""><FeatherIcon icon="user" /></Link>
					</li>
				</ul>
			</header>
		</>
	)
}
export default Header;