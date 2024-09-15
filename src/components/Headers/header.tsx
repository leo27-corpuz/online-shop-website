import Link from 'next/link'
import FeatherIcon from 'feather-icons-react';
import { usePathname } from 'next/navigation'
import '../../styles/header.scss'
import React, { useEffect, useState, useRef, FC } from 'react';
import { WebsiteLogo } from '@/fixtures/logo';
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
  return(
		<>
			<header className="header-container w-full py-4 px-4">
				<div className="container w-full mx-auto flex justify-between items-center relative">
					<div className="logo">
							<img className="w-32 h-12 object-cover" src={WebsiteLogo.url} alt={WebsiteLogo.alt} />
					</div>
					<div className="url-container fixed right-0 top-0 w-4/5 bg-white h-screen bg-white shadow-3xl hidden">
						<ul className="urls relative top-24 left-0 w-full p-6">
							<Link href="/"><li className="py-4 w-full border-b-[1px] border-darkCoffee">Home</li></Link>
							<Link href="/"><li className="py-4 w-full border-b-[1px] border-darkCoffee">Popular</li></Link>
							<Link href="/"><li className="py-4 w-full border-b-[1px] border-darkCoffee">New arrival</li></Link>
							<Link href="/"><li className="py-4 w-full border-b-[1px] border-darkCoffee">Brands</li></Link>
						</ul>
					</div>
					<div className="right-container flex items-center justify-between gap-3">
						<div className={`search-container absolute left-0 top-12 transition-all ease-in-out duration-1000 ${seachOpen ?  'opacity-100 pointer-events-auto w-full' : 'opacity-0 w-0 pointer-events-none'} lg:relative lg:opacity-100 lg:w-64 lg:top-0 lg:pointer-events-auto lg-w-full`} ref={refSearchInput}>
							<div className="search flex gap-3 w-full relative py-[10px] px-4 rounded-br-lg rounded-bl-lg shadow lg:rounded-lg lg:py-[7px] ld:px-3 lg:shadow-none lg:border-inherit lg:border-[2px] lg:border-inherit">
								<div>
									<FeatherIcon icon='search' className="text-textColorInput w-[1.4rem]"/>
								</div>
								<input type="text" placeholder="search" value={search} className="w-full bg-transparent outline-none text-base font-mono-regular text-textColorInput" onChange={inputSearch}/>
								<div onClick={clearInputSearch} className={`${search ? 'block' : 'hidden'}`}>
									<FeatherIcon icon='x' className="text-iconColors w-[1.2rem] text-darkCoffee"/>
								</div>
							</div>
						</div>
						<div className="icon transition-all ease-in-out duration-1000 cursor-pointer lg:hidden" onClick={openSearch} ref={openSearchRef}>
							<FeatherIcon icon='search' className="text-iconColors w-[1.4rem]" />
						</div>
						<ul className="icons-url-container flex gap-3">
							<li><Link href="/cart" className="text-iconColors"><FeatherIcon icon="shopping-cart" className="w-[1.4rem]"/></Link></li>
							<li><Link href="/account" className="text-iconColors"><FeatherIcon icon="user" className="w-[1.4rem]"/></Link></li>
						</ul>
						<div className="burger-icon-container mt-[2px]">
							<div className="burger z-[100] relative cursor-pointer xl:hidden">
								<div className="line w-[1.7rem] h-[2px] relative bg-iconColors mb-[3px] rounded-md transition-all duration-500 ease-in-out">
								</div>
								<div className="line w-[1.7rem] h-[2px] relative bg-iconColors mb-[3px] rounded-md transition-all duration-500 ease-in-out">
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