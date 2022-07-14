import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
	const { currentColor } = useStateContext();
	// console.log(`'${ currentColor }'`);
	return (
		<div className='mb-10'>
			<p className='text-gray-400'>{category}</p>
			<p
				className={'text-3xl font-extrabold tracking-tight '}
				style={{ color: currentColor }}
			>
				{title}
			</p>
		</div>
	);
};

export default Header;
