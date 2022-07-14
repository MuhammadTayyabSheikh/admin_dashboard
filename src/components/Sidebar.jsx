import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiBrain } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/data/dummy";

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } =
		useStateContext();

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize < 768) {
			setActiveMenu(false);
		}
	};

	// const isActive = false;
	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-100 dark:hover:text-black hover:bg-gray-100 m-2";

	return (
		<div className='ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto'>
			{activeMenu && (
				<>
					<div className='flex items-center justify-between'>
						<Link
							to='/'
							onClick={handleCloseSidebar}
							className='ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white'
						>
							<BiBrain /> <span>BrainiActs</span>
						</Link>
						<TooltipComponent content='Menu' position='BottomCenter'>
							<button
								type='button'
								onClick={() => setActiveMenu((preActiveMenu) => !preActiveMenu)}
								className='mt-4 block rounded-full p-3 text-xl hover:bg-gray-100 md:hidden'
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10'>
						{links.map((link) => (
							<div key={link.title}>
								<p className='m-3 mt-4 uppercase text-slate-400'>
									{link.title}
								</p>
								{link.links.map((item) => (
									<NavLink
										to={`${item.name}`}
										key={item.name}
										onClick={handleCloseSidebar}
										style={({ isActive }) => ({
											backgroundColor: isActive ? currentColor : "",
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{item.icon}
										<span className='capitalize'>{item.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
