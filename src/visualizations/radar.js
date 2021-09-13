import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default () => (
	<ResponsiveRadar
		data={data}
		keys={[
			"MacBook",
			"Chromebook",
			"PC"
		]}
		indexBy="taste"
		maxValue="auto"
		margin={{
			"top": 70,
			"right": 80,
			"bottom": 40,
			"left": 80
		}}
		curve="catmullRomClosed"
		borderWidth={2}
		borderColor="inherit"
		gridLevels={5}
		gridShape="circular"
		gridLabelOffset={36}
		enableDots={true}
		dotSize={8}
		dotColor="inherit"
		dotBorderWidth={0}
		dotBorderColor="#ffffff"
		enableDotLabel={true}
		dotLabel="value"
		dotLabelYOffset={-12}
		colors="nivo"
		colorBy="key"
		fillOpacity={0.1}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
		isInteractive={true}
		legends={[
			{
				"anchor": "top-left",
				"direction": "column",
				"translateX": -50,
				"translateY": -40,
				"itemWidth": 80,
				"itemHeight": 20,
				"itemTextColor": "#999",
				"symbolSize": 12,
				"symbolShape": "circle",
				"effects": [
					{
						"on": "hover",
						"style": {
							"itemTextColor": "#000"
						}
					}
				]
			}
		]}
	/>
);

const data = [
	{
		"taste": "Weight",
		"MacBook": 64,
		"Chromebook": 72,
		"PC": 38
	},
	{
		"taste": "Processor",
		"MacBook": 110,
		"Chromebook": 59,
		"PC": 78
	},
	{
		"taste": "Screen",
		"MacBook": 69,
		"Chromebook": 87,
		"PC": 105
	},
	{
		"taste": "Keyboard",
		"MacBook": 97,
		"Chromebook": 84,
		"PC": 105
	},
	{
		"taste": "Speed",
		"MacBook": 94,
		"Chromebook": 102,
		"PC": 117
	}
];
