import React from "react";

const skills = [
	{
		category: "Programming",
		skill_list: [
			"JavaScript",
			"Python",
			"C++",
			"Java",
			"BASH",
			"C#",
			"Git",
			"SQL",
			"Elixir",
			"HTML5",
			"CSS3",
		],
	},
	{
		category: "Tools & Technologies",
		skill_list: [
			"MongoDB",
			"Express",
			"React",
			"Node.js",
			"PostgreSQL",
			"GraphQL",
			"Salesforce",
			"Heroku",
			"AWS",
			"GCP",
		],
	},
	{
		category: "Soft Skills",
		skill_list: [
			"Active Listening",
			"Creativity",
			"Root-Cause Problem Analysis",
			"Dedicated ",
			"Detail-Oriented",
		],
	},
];

function Skills() {
	return (
		<div className="skills">
			{skills.map((skill, index) => (
				<div key={`skill-category-${index}`}>
					<h3>{skill.category}</h3>
					<p>{skill.skill_list.join(" | ")}</p>
				</div>
			))}
		</div>
	);
}

export default Skills;
