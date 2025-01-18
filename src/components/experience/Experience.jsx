import React from "react";

import "./Experience.css";

import ExperienceCard from "./Experience-card.jsx";

const ls = [
	{
		name: "Socion",
		url: "https://socion.io",
		position_list: [
			{
				title: "Analyst - Software Engineer",
				from: "JUN, 2024",
				to: "SEPT, 2024",
				activities: [
					"Socion partners with NGOs, development agencies & government institutions to tackle many societal challenges such as climate change, poverty, public health etc.",
					"Utilized PostgreSQL to design and develop databases & created APIs using Node.js-Express framework.",
					"Used React.js to build and maintain their SaaS platform, React Native and JavaScript for their mobile application, & GraphQL to fetch specific data from multiple sources.",
				],
			},
			{
				title: "Analyst",
				from: "APR, 2024",
				to: "JUN, 2024",
				activities: [
					"Used Power BI to build models from data coming in from APIs and other sources, making visualizations for data analysis, & creating dashboards for many programs.",
				],
			},
		],
	},
	{
		name: "Kasmo",
		url: "https://www.kasmodigital.com/",
		position_list: [
			{
				title: "Software Engineer - Full Stack Web Developer",
				from: "JUL, 2023",
				to: "JAN, 2024",
				activities: [
					"Built applications with Javascript and Node.js for backend, & React.js for frontend.",
					"Used PostgreSQL & designed APIs and database entities for Salesforce Objects.",
					"Worked as a team lead for interns, helped in their training on REST APIs and in developing mobile applications using React Native.",
					"Deployed server applications on Heroku and integrated database with Salesforce.",
				],
			},
		],
	},
	{
		name: "Quickmetrix",
		url: "https://quickmetrix.com/",
		position_list: [
			{
				title: "Software Engineer - Full Stack Web Developer",
				from: "JAN, 2022",
				to: "JUN, 2023",
				activities: [
					"Quickmetrix is a SaaS platform that helps businesses in empowering their brands through Social Media Response Management and Brand Measurement.",
					"Worked with Javascript & Node.js framework for the server, ReactJS for the client applications, used MongoDB for database, GCP for scheduling, storage, queues.",
					"Built Application Systems for sending and receiving mails for Gmail users using Gmail API, fetched Instagram Insights for businesses using Facebook Graph API.",
				],
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
