import React from "react";

import "./Home.css";

import MyPicture from "../components/MyPicture";
import Greetings from "../components/Greetings";

import Skills from "../components/Skills";

import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";

function Home() {
	return (
		<div className="home">
			{/* Right Column */}
			<div className="home-right-column">
				{/* Image */}
				<MyPicture />

				{/* Skills */}
				<Skills />
			</div>

			{/* Content */}
			<div className="home-content">
				{/* Top section */}
				<div className="home-content-top">
					{/* Greetings */}
					<Greetings />

					{/* Certifications */}
					<div>Certifications</div>

					{/* Education */}
					<div>Education</div>
				</div>

				{/* Middle section */}
				<div className="home-content-middle">
					{/* Experience */}
					<Experience />

					{/* Projects */}
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default Home;
