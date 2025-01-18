import React, { useState } from "react";

import "./Experience-card.css";

const ExperienceCard = function (props) {
	const { company } = props; // Pick company from props

	return (
		<div className="experience-card">
			<div className="experience-card-company-name-url">
				<h3>{company.name}</h3>
				&nbsp; &nbsp; &nbsp;
				<a href={company.url}>Link</a>
			</div>
			{company.position_list.map((position, index) => (
				<div
					className="experience-card-position"
					key={`experience-card-position-${index}`}
				>
					{/* Position, with year */}
					<div className="experience-card-position-name-duration">
						<h4 className="experience-card-position-name">
							{position?.title}
						</h4>

						{/* Duration of position */}
						<p className="experience-card-position-duration">
							{position?.from} - {position?.to}
						</p>
					</div>

					{/* List of responsibilities */}
					<ul className="experience-card-position-activity">
						{position?.activities.map((activity, index) => (
							<li
								key={`experience-card-position-activity-${index}`}
							>
								{activity}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default ExperienceCard;
