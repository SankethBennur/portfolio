import React from "react";

import "./Home.css";

import MyPicture from "../components/MyPicture";
import Greetings from "../components/Greetings";

import Contact from "../components/Contact";
import Skills from "../components/Skills";

import Certifications from "../components/Certifications";
import Education from "../components/Education";

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

				{/* Contact */}
				<Contact />
			</div>

			{/* Content */}
			<div className="home-content">
				{/* Top section */}
				<div className="home-content-top">
					{/* Greetings */}
					<Greetings />

					{/* Certifications */}
					<Certifications />

					{/* Education */}
					<Education />
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
