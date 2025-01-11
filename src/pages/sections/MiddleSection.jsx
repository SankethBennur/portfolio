import React from "react";

import Skills from "./../../components/Skills";
import Experience from "./../../components/Experience";
import Projects from "./../../components/Projects";

import { Grid2 } from "@mui/material";

function MiddleSection() {
	return (
		<Grid2
			container
			sx={{ height: "70%", justifyContent: "space-evenly" }}>
			<Skills />
			<Experience />
			<Projects />
		</Grid2>
	);
}

export default MiddleSection;
