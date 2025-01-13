import React from "react";

import "./Home.css";

function Home() {
	return (
		<div className="home">
			{/* Right Column */}
			<div className="home-right-column">
				{/* Image */}
				<div>Image</div>

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
					<div>Experience</div>

					{/* Projects */}
					<div>Projects</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
