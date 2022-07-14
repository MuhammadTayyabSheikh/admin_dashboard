import React from "react";
import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Search,
	Page,
	Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/data/dummy";
import { Header } from "../components";

const Employee = () => {
	return (
		<div className='m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='Page' title='Employees' />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				allowSorting
        toolbar={['Search']}
        width='auto'
			>
				<ColumnsDirective>
					{employeesGrid.map((column, index) => (
						<ColumnDirective key={index} {...column} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Page,
            Search, Toolbar
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Employee;
