import React from "react";
import {
	GridComponent,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
	ColumnsDirective,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/data/dummy";
import { Header } from "../components";

const Orders = () => {
	return (
		<div className='m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='Page' title='Orders' />
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
			>
				<ColumnsDirective>
					{ordersGrid.map((column, index) => (
						<ColumnDirective key={index} {...column} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Page,
						ExcelExport,
						Edit,
						Filter,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
