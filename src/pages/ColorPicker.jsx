import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import Header from "./../components/Header";
import { Browser } from "@syncfusion/ej2-base";

const change = (args) => {
	document.getElementById("preview").style.backgroundColor =
		args.currentValue.hex;
};
const mob = () => {
	if (Browser.isDevice) {
		document.getElementById("inline-control").classList.add("e-mobile-control");
	}
};
mob();
const ColorPicker = () => {
	return (
		<div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='App' title='Color Picker' />
			<div className='text-center'>
				<div id='preview' />
				<div
					id='inline-control'
					className='flex flex-wrap items-center justify-center gap-20'
				>
					<div>
						<p className='mt-2 mb-4 text-2xl font-semibold'>Inline Pallete</p>
						<ColorPickerComponent
							id='inline-palette'
							mode='Palette'
							modeSwitcher={false}
							inline={true}
							showButtons={false}
							change={change}
						/>
					</div>
					<div>
						<p className='mt-2 mb-4 text-2xl font-semibold'>Inline Picker</p>
						<ColorPickerComponent
							id='inline-picker'
							mode='Picker'
							modeSwitcher={false}
							inline={true}
							showButtons={false}
							change={change}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorPicker;
