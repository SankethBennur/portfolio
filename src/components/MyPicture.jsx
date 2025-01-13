import React from "react";

import Picture from "../assets/me.jpeg";

import "./MyPicture.css";

const MyPicture = function () {
	const my_name = "Sanketh Bennur";

	return (
		<div className="picture-container">
			<img
				className="picture"
				src={Picture}
				alt={my_name}
			/>
		</div>
	);
};

export default MyPicture;
