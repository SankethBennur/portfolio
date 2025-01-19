import React, { useState } from "react";

import "./Education.css";

import logo_edu_dsatm from "../assets/logo_edu_dsatm.jpg";
import logo_edu_rhul from "../assets/logo_edu_rhul.jpg";

const education_list = [
	{
		name: "Royal Holloway University of London",
		src: logo_edu_rhul,
		degree: "Master of Science",
		domain: "Computer & Data Science",
		duration: ["SEPT, 2020", "SEPT, 2022"],
	},
	{
		name: "Dayananda Sagar Academy of Technology & Management",
		src: logo_edu_dsatm,
		degree: "Bachelor of Engineering",
		domain: "Computer Science & Engineering",
		duration: ["AUG, 2015", "AUG, 2019"],
	},
];

function Education() {
	const [selected_edu_index, set_selected_edu_index] = useState(0);

	return (
		<div className="education">
			<h2>Education</h2>

			{/* One row containing list of institutes */}
			<div className="education-container">
				<div className="education-container-row">
					{education_list.map((item, index) => (
						<img
							key={`edu-logo-${index}`}
							className={`edu-logo ${
								selected_edu_index === index ? "selected" : ""
							}`}
							src={item.src}
							alt={item.name}
							onClick={() => set_selected_edu_index(index)}
						/>
					))}
				</div>

				{/* Box for education info */}
				<div className="education-container-info-box">
					<h4>{education_list[selected_edu_index].name}</h4>
					<p className="education-container-info-box-paragraph">
						{education_list[selected_edu_index].degree},{" "}
						{education_list[selected_edu_index].domain}
					</p>
					<p className="education-container-info-box-paragraph">
						{education_list[selected_edu_index].duration[0]} -{" "}
						{education_list[selected_edu_index].duration[1]}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Education;
