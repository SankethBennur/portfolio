import React from "react";

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
		</div>
	);
}

export default Greetings;
