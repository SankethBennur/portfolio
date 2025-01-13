import React from "react";

import "./Home.css";

import MyPicture from "../components/MyPicture";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

function Home() {
	return (
		<div className="home">
			{/* Right Column */}
			<div className="home-right-column">
				{/* Image */}
				<MyPicture />

				{/* Skills */}
				<div>Skills</div>
			</div>

			{/* Content */}
			<div className="home-content">
				{/* Top section */}
				<div className="home-content-top">
					{/* Greetings */}
					<div>Greetings</div>

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
