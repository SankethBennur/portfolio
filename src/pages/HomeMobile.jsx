import React from "react";

import "./HomeMobile.css";

import MyPicture from "../components/MyPicture";
import Greetings from "../components/Greetings";

import Contact from "../components/Contact";
import Skills from "../components/Skills";

import Certifications from "../components/Certifications";
import Education from "../components/Education";

import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";

const HomeMobile = function () {
	return (
		<div className="home-mobile">
			{/* Picture */}
			<MyPicture />

			{/* Greetings */}
			<Greetings />

			{/* Contact */}
			<Contact />

			{/* Certifications */}
			<Certifications />

			{/* Education */}
			<Education />

			{/* Skills */}
			<Skills />

			{/* Work Experience */}
			<Experience />

			{/* Projects */}
			<Projects />
		</div>
	);
};

export default HomeMobile;
