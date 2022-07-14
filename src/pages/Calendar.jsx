import React from "react";
import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Year,
	Agenda,
	Inject,
	Resize,
	DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/data/dummy";
import { Header } from "../components";

const calender = () => {
	return (
		<div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='App' title='Calender' />
			<ScheduleComponent
				height='650px'
				eventSettings={{ dataSource: scheduleData }}
				selectedDate={new Date(2021, 0, 10)}
			>
				<Inject
					services={[
						Day,
						Week,
						WorkWeek,
						Month,
						Year,
						Agenda,
						Resize,
						DragAndDrop,
					]}
				/>
			</ScheduleComponent>
		</div>
	);
};

export default calender;
