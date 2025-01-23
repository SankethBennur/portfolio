import React from "react";

import "./Contact.css";

import IconGithub from "../assets/icon-github.svg";
import IconLinkedIn from "../assets/icon-linkedin.svg.webp";
import IconEmail from "../assets/icon-email.png";

function Contact() {
	return (
		<div className="contact">
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
	);
}

export default Contact;
