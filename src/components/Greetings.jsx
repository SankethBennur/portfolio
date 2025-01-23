import React from "react";

import IconGithub from "../assets/icon-github.svg";
import IconLinkedIn from "../assets/icon-linkedin.svg.webp";
import IconEmail from "../assets/icon-email.png";

import "./Greetings.css";

function Greetings() {
	return (
		<div className="greetings">
			<h1>Greetings!</h1>
			<div className="greetings-content">
				I am &nbsp;
				<h3 className="greetings-my-name">Sanketh Bennur</h3>
			</div>
			<div className="greetings-content">
				💻 Software Engineer <br />
				🕵🏽 Cybersecurity Enthusiast <br />
				🤖 AI & ML Explorer
			</div>
			{/* <ul className="greetings-content">
				<li>Software Engineer</li>
				<li>Cybersecurity Enthusiast</li>
				<li>AI & ML Explorer</li>
			</ul> */}
			<div className="greetings-connect">
				<h4>Connect:</h4>
				&nbsp;
				<a
					href={"https://github.com/SankethBennur/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={IconGithub}
						style={{
							width: "20px",
							height: "20px",
							filter: "invert(1)",
						}}
					/>
					{/* Github */}
				</a>
				&nbsp;|&nbsp;
				<a
					href={"https://www.linkedin.com/in/sankethbennur/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={IconLinkedIn}
						style={{ width: "20px", height: "20px" }}
					/>
					{/* LinkedIn */}
				</a>
				&nbsp;|&nbsp;
				<a
					href={"mailto:sankethbennur@gmail.com"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={IconEmail}
						style={{
							width: "20px",
							height: "20px",
							filter: "invert(1)",
						}}
					/>
					{/* Email */}
				</a>
			</div>
		</div>
	);
}

export default Greetings;
