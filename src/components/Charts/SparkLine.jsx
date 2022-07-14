import React from "react";
import {
	SparklineComponent,
	Inject,
	TooltipComponent,
} from "@syncfusion/ej2-react-charts";
import { SparklineTooltip } from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
	return (
		<>
			<SparklineComponent
				id={id}
				height={height}
				width={width}
				xName='x'
				yName='y'
				LineWidth={1}
				valueType='Numeric'
				fill={color}
				border={{ color: currentColor, width: 2 }}
				dataSource={[2, 6, 8, 5, 10]}
				type={type}
				tooltipSettings={{
					visible: true,
					format: "${x} : data ${y}",
					trackLineSettings: { visible: true },
				}}
			>
				<Inject services={[SparklineTooltip]} />
			</SparklineComponent>
		</>
	);
};
export default SparkLine;
