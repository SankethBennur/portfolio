import React, { useState } from "react";

import "./Experience-card.css";

import IconGoto from "../../assets/icon_goto.png";

const ExperienceCard = function (props) {
	const { company } = props; // Pick company from props

	return (
		company.name &&
		company.url &&
		company.position_list &&
		company.position_list.length > 0 && (
			<div className="experience-card">
				<div className="experience-card-company-name-url">
					<h3>{company.name}</h3>
					&nbsp; &nbsp; &nbsp;
					{/* <a
						href={company.url}
						target="_blank"
						rel="noopener noreferrer"
					>
					Link
					</a> */}
					<a
						href={company.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="company-goto-img"
							src={IconGoto}
						/>
					</a>
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
								<i>
									{position?.from} - {position?.to}
								</i>
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
		)
	);
};

export default ExperienceCard;
