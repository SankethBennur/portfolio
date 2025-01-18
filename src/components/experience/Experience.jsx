import React from "react";

import "./Experience.css";

import ExperienceCard from "./Experience-card.jsx";

const ls = [
	{
		name: "Socion 1",
		url: "https://socion.io",
		position_list: [
			{
				title: "Analyst - Software Engineer",
				from: "JUN, 2024",
				to: "SEPT, 2024",
				activities: ["gg wp", "gg wp", "gg wp"],
			},
			{
				title: "Analyst",
				from: "APR, 2024",
				to: "JUN, 2024",
				activities: ["gg wp", "gg wp", "gg wp"],
			},
		],
	},
	{
		name: "Socion 2",
		position_list: [
			{
				title: "Analyst - Software Engineer",
				from: "APR, 2024",
				to: "SEPT, 2024",
				activities: ["gg wp", "gg wp", "gg wp"],
			},
		],
	},
	{
		name: "Socion 1",
		url: "https://socion.io",
		position_list: [
			{
				title: "Analyst - Software Engineer",
				from: "JUN, 2024",
				to: "SEPT, 2024",
				activities: ["gg wp", "gg wp", "gg wp"],
			},
			{
				title: "Analyst",
				from: "APR, 2024",
				to: "JUN, 2024",
				activities: ["gg wp", "gg wp", "gg wp"],
			},
		],
	},
];

const Experience = function () {
	return (
		<div className="experience-container">
			<h2>Experience</h2>
			<div className="experience-content">
				{/*
					List all companies, and positions in each company 
					- Each company name is a heading
					- There is a company logo (1:1) - to the left, beside company name
					- Position and duration as in resume,
						> Position can also get pushed a little right due to logo
				*/}
				{ls.map((item, index) => (
					<ExperienceCard
						key={`experience-content-company-${index}`}
						company={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Experience;
