import React from "react";
import MyPicture from "./../../components/MyPicture";
import Greetings from "./../../components/Greetings";
import Certifications from "./../../components/Certifications";
import Education from "./../../components/Education";

import { Grid2 } from "@mui/material";

function TopSection() {
	return (
		<Grid2
			container
			sx={{ height: "30%" }}>
			<Grid2
				container
				sx={{ width: "50%", justifyContent: "space-evenly" }}>
				<MyPicture />
				<Greetings />
			</Grid2>
			<Grid2
				container
				sx={{ minWidth: "50%", justifyContent: "space-evenly" }}>
				<Certifications />
				<Education />
			</Grid2>
		</Grid2>
	);
}

export default TopSection;
