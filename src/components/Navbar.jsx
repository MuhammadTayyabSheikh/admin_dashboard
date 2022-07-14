import React, { useEffect } from "react";
import { Cart, Chat, Notification, UserProfile } from ".";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={customFunc}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-gray-100'
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
		currentColor
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [setScreenSize]);

	useEffect(() => {
		if (screenSize <= 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize, setActiveMenu]);

	return (
		<div className='relative flex justify-between p-2 md:mx-6'>
			<NavButton
				title='Menu'
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className='flex'>
				<NavButton
					title='Cart'
					customFunc={() => handleClick("cart")}
					color={currentColor}
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title='Chat'
					dotColor='#03C9D7'
					customFunc={() => handleClick("chat")}
					color={currentColor}
					icon={<BsChatLeft />}
				/>
				<NavButton
					title='Notification'
					dotColor='#03C9D7'
					customFunc={() => handleClick("notification")}
					color={currentColor}
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='hover:bg-lght-gray flex cursor-pointer items-center gap-2 rounded-lg p-1'
						onClick={() => handleClick("userProfile")}
					>
						<img src={avatar} alt='Profile' className='h-8 w-8 rounded-full' />
						<p>
							<span className='text-14 text-gray-400'>Hi, </span>{" "}
							<span className='text-400 ml-1 text-14 font-bold'>Tayyab</span>
						</p>
						<MdKeyboardArrowDown className='text-14 text-gray-400' />
					</div>
				</TooltipComponent>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
