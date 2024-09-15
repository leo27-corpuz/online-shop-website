import Link from 'next/link'
import FeatherIcon from 'feather-icons-react';
import { usePathname } from 'next/navigation'
import '../../styles/header.scss'
import React, { useEffect, useState, useRef, FC } from 'react';
import { WebsiteLogo } from '@/fixtures/logo';
import Tooltip from '../Tooltip/tooltip';
const Header: React.FC = (props) => {
	const pathname = `/${usePathname().split('/')[1]}`
	// search open and close
	const [seachOpen, setSearchOpen] = useState<Boolean>(false)
	const refSearchInput = useRef<HTMLInputElement>(null);
	const openSearchRef = useRef<HTMLDivElement>(null)
	const openSearch = () => {
		setSearchOpen(!seachOpen);
	}
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
      if (refSearchInput.current && !refSearchInput.current.contains(event.target as Node) && !openSearchRef.current?.contains(event.target as Node) && seachOpen) {
				setSearchOpen(false)
      }
		}
		document.addEventListener("mousedown", handleClickOutside);	
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refSearchInput, seachOpen])

	//input search
	const [search, setSearch] = useState<string>('');
	const inputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	const clearInputSearch = () => {
		setSearch('')
	}

	//toggle menu
	const [menuStatus, setMenuStatus] = useState<Boolean>(false);
	const menuToggle = (e: React.MouseEvent) => {
		setMenuStatus(!menuStatus)
	}

	//hover toottip
	const [toolTip, setToolTip] = useState<string>('')
	const hoverTooltipe = (value: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
		setToolTip(value)
	}
	const leaveTooltipe = () => {
		setToolTip('')
	}
  return(
		<>
			<header className="header-container w-full py-4 px-4">
				<div className="container w-full mx-auto flex justify-between items-center relative">
					<div className="logo">
							<Link href="/"><img className="w-auto h-12 object-cover md:w-40 md:h-18" src={WebsiteLogo.url} alt={WebsiteLogo.alt} /></Link>
					</div>
					<div className={`url-container z-50 fixed right-0 top-0 w-4/5 bg-white h-screen bg-white shadow-3xl transition-all duration-1000 ease-in-out ${menuStatus ? 'translate-x-0' : 'translate-x-full'} sm:w-8/12 lg:relative lg:h-auto lg:w-auto lg:bg-none lg:shadow-none lg:transform-none`}>
						<ul className="urls relative top-24 left-0 w-full p-6 lg:w-auto lg-h-auto lg:flex lg:top-0 lg:gap-4 lg:gap-6 xl:gap-12">
							<Link onClick={() => setMenuStatus(false)} href="/"><li className={`py-4 w-full border-b-[1px] font-mono-regular-semibold transition-all ease-in-out duration-1000 lg:py-2 ${pathname == '/' && 'border-darkCoffee'} hover:border-darkCoffee`}>Home</li></Link>
							<Link onClick={() => setMenuStatus(false)} href="/popular"><li className={`py-4 w-full border-b-[1px] font-mono-regular-semibold transition-all ease-in-out duration-1000 lg:py-2 ${pathname == '/popular' && 'border-darkCoffee'} hover:border-darkCoffee`}>Popular</li></Link>
							<Link onClick={() => setMenuStatus(false)} href="/new-arrival"><li className={`py-4 w-full border-b-[1px] font-mono-regular-semibold transition-all ease-in-out duration-1000 lg:py-2 ${pathname == '/new-arrival' && 'border-darkCoffee'} hover:border-darkCoffee`}>New arrival</li></Link>
							<Link onClick={() => setMenuStatus(false)} href="/brands"><li className={`py-4 w-full border-b-[1px] font-mono-regular-semibold transition-all ease-in-out duration-1000 lg:py-2 ${pathname == '/brands' && 'border-darkCoffee'} hover:border-darkCoffee`}>Brands</li></Link>
						</ul>
					</div>
					<div className="right-container flex items-center justify-between gap-3 md:gap-6">
						<div className={`search-container absolute z-40 bg-white left-0 top-12 transition-all ease-in-out duration-1000 ${seachOpen ?  'opacity-100 pointer-events-auto w-full' : 'opacity-0 w-0 pointer-events-none'} lg:relative lg:opacity-100 lg:w-64 lg:top-0 lg:pointer-events-auto lg-w-full`} ref={refSearchInput}>
							<div className="search flex gap-3 w-full relative py-[10px] px-4 rounded-br-lg rounded-bl-lg shadow lg:rounded-lg lg:py-[7px] ld:px-3 lg:shadow-none lg:border-inherit lg:border-[2px] lg:border-inherit">
								<div>
									<FeatherIcon icon='search' className="text-textColorInput w-[1.4rem]"/>
								</div>
								<input type="text" placeholder="search" value={search} className="w-full bg-transparent outline-none text-base font-mono-regular text-textColorInput" onChange={inputSearch}/>
								<div onClick={clearInputSearch} className={`${search ? 'block' : 'hidden'}`}>
									<FeatherIcon icon='x' className="text-iconColors w-[1.2rem] text-darkCoffee cursor-pointer"/>
								</div>
							</div>
						</div>
						<div className="icon transition-all ease-in-out duration-1000 cursor-pointer lg:hidden" onClick={openSearch} ref={openSearchRef}>
							<FeatherIcon icon='search' className="text-iconColors w-[1.4rem]" />
						</div>
						<ul className="icons-url-container flex gap-3 md:gap-4">
							<li>
								<Link href="/cart" className={`transition-all duration-500 ease-in-out relative z-0 ${pathname == '/cart' ? 'text-darkCoffee' : 'text-iconColors'} hover:text-darkCoffee`}
									onMouseEnter={hoverTooltipe('shopping-cart')}
									onMouseLeave={leaveTooltipe}
									onTouchEnd={leaveTooltipe}
								>
									<FeatherIcon icon="shopping-cart" className="w-[1.4rem]"/>
									<Tooltip titleText="Shopping Cart" widthPx='10rem' leftPx='-65px' topPx='30px' display={toolTip == 'shopping-cart' ? true : false} />
								</Link>
							</li>
							<li>
								<Link href="/favorite" className={`transition-all duration-500 ease-in-out relative z-0 ${pathname == '/favorite' ? 'text-darkCoffee' : 'text-iconColors'} hover:text-darkCoffee`}
									onMouseEnter={hoverTooltipe('heart')}
									onMouseLeave={leaveTooltipe}
									onTouchEnd={leaveTooltipe}
								>
									<FeatherIcon icon="heart" className="w-[1.4rem]"/>
									<Tooltip titleText="Heart" widthPx='5rem' leftPx='-28px' topPx='30px' display={toolTip == 'heart' ? true : false}/>
								</Link>
							</li>
							<li>
								<Link href="/account" className={`transition-all duration-500 ease-in-out relative z-0 ${pathname == '/account' ? 'text-darkCoffee' : 'text-iconColors'} hover:text-darkCoffee`}
									onMouseEnter={hoverTooltipe('user')}
									onMouseLeave={leaveTooltipe}
									onTouchEnd={leaveTooltipe}
								>
									<FeatherIcon icon="user" className="w-[1.4rem]"/>
									<Tooltip titleText="User" widthPx='5rem' leftPx='-28px' topPx='30px' display={toolTip == 'user' ? true : false}/>
								</Link>
							</li>
						</ul>
						<div className={`burger-icon-container mt-[2px]`}>
							<div className="burger z-[100] relative cursor-pointer xl:hidden" onClick={menuToggle}>
								<div className={`line w-[1.7rem] h-[2px] relative bg-iconColors mb-[3px] rounded-md transition-all duration-500 ease-in-out ${menuStatus ? 'rotate-[225deg] top-[5px]' : 'rotate-[0deg] top-[0px]'} lg:w-[2.2em] md:duration-1000 lg:mb-[5px]`}>
								</div>
								<div className={`line w-[1.7rem] h-[2px] relative bg-iconColors mb-[3px] rounded-md transition-all duration-500 ease-in-out ${menuStatus ? 'rotate-[-45deg] top-[-1px] lg:top-[-3px]' : 'rotate-[0deg] top-[0px]'} lg:w-[2.2em] md:duration-1000 lg:mb-[5px]`}>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header;