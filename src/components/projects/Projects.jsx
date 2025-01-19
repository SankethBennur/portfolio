import React from "react";

import "./Projects.css";

import ProjectCard from "./Project-card";

const project_list = [
	{
		name: "Netflix clone",
		urls: [
			{
				url: "https://nf-clone-client.web.app/",
				url_title: "Demo",
			},
			{
				url: "https://github.com/SankethBennur/netflix.git",
				url_title: "Link",
			},
		],
		technologies: [
			"MongoDB",
			"Express",
			"React",
			"Node.js",
			"JSON Web Tokens",
		],
		activities: [
			"Netflix Clone Web Application using RESTful APIs built on MERN Stack.",
			"Backend involved utilizing JWT Tokens to perform User-Authentication.",
			"Password Encryption is performed using Crypto-js Library.",
		],
	},
	{
		name: "Discord GPT chat",
		urls: [
			{
				url: "https://github.com/SankethBennur/discord-gpt-bot.git",
				url_title: "Link",
			},
		],
		technologies: ["Node.js", "MongoDB", "OpenAI GPT"],
		activities: [
			"Built 2 discord bots - one for ban, kick and timeout of a user, grants daily points, handles point cooldown, levels up character and ranks all users by level in server.",
			"The other discord bot is a GPT-4 chat-bot that responds to user messages and has access to message history in the channel for context, using GPT’s “assistant” role.",
		],
	},
	{
		name: "Transfer Learning thesis",
		urls: [
			{
				url: "https://raw.githubusercontent.com/SankethBennur/transfer-learning-thesis/refs/heads/master/dissertation.pdf",
				url_title: "Thesis",
			},
			{
				url: "https://github.com/SankethBennur/transfer-learning-thesis.git",
				url_title: "Link",
			},
		],
		technologies: ["Convolutional Neural Networks", "Transfer Learning"],
		activities: [
			"Submitted a dissertation on Transfer Learning as part of Master of Science degree.",
			"The project compares various pre-trained Neural Network models such as VGG16, ResNet50, Inception-V3 and MobileNet for transfer learning on the Human Action Recognition dataset.",
			"The models have been compared on the factors – accuracy, loss, storage size, number  parameters, architecture etc.",
		],
	},
	{
		name: "Unreal Engine Gameplay Ability System",
		urls: [
			{
				url: "https://github.com/SankethBennur/unreal-engine-GAS-basic.git",
				url_title: "Link",
			},
		],
		technologies: ["C++", "Unreal Engine 5.2"],
		activities: [
			"As a hobby, implemented the advance Gameplay Ability System framework into an Unreal Engine Project in C++.",
			"Made many features of gameplay, such as Passives, Effect-Calculations, Statuses etc. inspired by the video game DotA 2.",
		],
	},
	{
		name: "Google and EY - BrightNetwork Internship Experience UK",
		urls: [
			{
				url: "https://www.brightnetwork.co.uk/certificates/internship-experience-uk-techn_p5ryyqu7j3v6ed/",
				url_title: "Link",
			},
		],
		technologies: ["Python", "Node.js", "Express"],
		activities: [
			"Took part in Internship Experience UK and worked on assignments from Google and EY in the frenetic 3 day event.",
			"Developed a YouTube CLI as part of the Google Assignment using Python to send requests and receive responses from a locally hosted server built using Express.js.",
		],
	},
];

const Projects = function () {
	return (
		<div className="projects">
			<h2>Projects</h2>
			<div className="project-content">
				{project_list.map((item, index) => (
					<ProjectCard
						key={`project-${index}`}
						project={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
