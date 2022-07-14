import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Edit,
	Toolbar,
	Sort,
	Filter,
	Search,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "./../data/data/dummy";
import { Header } from "../components";

const Customer = () => {
	return (
		<div className='m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='Page' title='Customers' />
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete", "Add", "Edit", "Search"]}
				editSettings={{
					allowEditing: true,
					allowAdding: true,
					allowDeleting: true,
					mode: "Dialog",
				}}
				width='auto'
			>
				<ColumnsDirective>
					{customersGrid.map((column, index) => (
						<ColumnDirective key={index} {...column} />
					))}
				</ColumnsDirective>
				<Inject
					services={[Page, Search, Toolbar, Sort, Selection, Edit, Filter]}
				/>
			</GridComponent>
		</div>
	);
};

export default Customer;
