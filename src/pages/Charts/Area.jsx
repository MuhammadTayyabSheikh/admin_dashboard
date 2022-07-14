import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
  Tooltip,
	SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
	areaCustomSeries,
	areaPrimaryXAxis,
	areaPrimaryYAxis,
} from "../../data/data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
	const { currentMode } = useStateContext();

	return (
		<div className='m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10'>
			<Header category='Area' title='Inflation Rate in Percentage' />
			<ChartComponent
				id='line-chart'
				height='420px'
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
			>
				<Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Area;
