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
				Software Engineer & Cybersecurity Enthusiast
			</div>
		</div>
	);
}

export default Greetings;
