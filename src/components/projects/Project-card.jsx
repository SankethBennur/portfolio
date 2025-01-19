import React from "react";

import "./Project-card.css";

import IconGoto from "../../assets/icon_goto.png";

const ProjectCard = function (props) {
	const { project } = props;

	return (
		project.name &&
		project.urls &&
		project.technologies &&
		project.activities && (
			<div className="project-card">
				<div className="project-card-title">
					{/* Project name */}
					<h3>{project.name}</h3>

					{/* List of project URLs */}
					<div className="project-card-title-urls">
						{project.urls.map((item, index) => (
							<a
								key={`project-url-${index}`}
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.url_title.toLowerCase() === "link" ? (
									<img
										className="project-github-link"
										src={IconGoto}
									/>
								) : (
									<>&nbsp;{item.url_title}</>
									// The above is still a div
								)}
							</a>
						))}
					</div>
				</div>

				{/* Technologies */}
				<h4 className="project-card-technologies">
					{project.technologies.join(" | ")}
				</h4>

				{/* Activities */}
				<ul className="project-card-activities">
					{project.activities.map((item, index) => (
						<li key={`project-activity-${index}`}>{item}</li>
					))}
				</ul>
			</div>
		)
	);
};

export default ProjectCard;
