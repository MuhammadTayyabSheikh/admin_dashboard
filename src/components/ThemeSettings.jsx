import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { itemsToOrder } from "@syncfusion/ej2/treemap";

const ThemeSetting = () => {
	const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
		useStateContext();
	return (
		<div className='nav-item fixed top-0 right-0 w-screen bg-half-transparent'>
			<div className='float-right h-screen w-400 bg-[#e5e5e5] dark:text-gray-200'>
				<div className='ml-4 flex items-center justify-between p-4'>
					<p className='text-xl font-semibold'>Settings</p>
					<button
						type='button'
						onClick={() => setThemeSettings(false)}
						style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
						className='p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl'
					>
						<MdOutlineCancel />
					</button>
				</div>
				<div className='ml-4 flex-col border-t-1 border-color p-4'>
					<p className='text-lg font-semibold'>Theme Option</p>
					<div className='mt-4'>
						<input
							type='radio'
							id='light'
							name='theme'
							value="Light"
							className='cursor-pointer'
							onChange={setMode}
							checked={currentMode === "Light"}
						/>
						<label htmlFor='light' className='text-md ml-2 cursor-pointer'>
							Light
						</label>
					</div>

					<div className='mt-4'>
						<input
							type='radio'
							id='dark'
							name='theme'
							value="Dark"
							className='cursor-pointer'
							onChange={setMode}
							checked={currentMode === "Dark"}
						/>
						<label htmlFor='dark' className='text-md ml-2 cursor-pointer'>
							Dark
						</label>
					</div>
				</div>
				<div className='ml-4 flex-col border-t-1 border-color p-4'>
					<p className='text-lg font-semibold'>Theme Colors</p>
					<div className='flex gap-3'>
						{themeColors.map((color, index) => (
							<TooltipComponent
								key={index}
								content={color.name}
								position='TopCenter'
							>
								<div className='relative mt-2 flex cursor-pointer items-center'>
									<button
										type='button'
										className='h-10 w-10 cursor-pointer rounded-full'
										style={{ backgroundColor: color.color }}
										onClick={() => setColor(color.color)}
									>
										<BsCheck
											className={`ml-2 text-2xl text-white ${
												color.color === currentColor ? "block" : "hidden"
											}`}
										/>
									</button>
								</div>
							</TooltipComponent>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeSetting;
