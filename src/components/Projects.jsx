import React from "react";

import { Grid, Grid2 } from "@mui/material";

function Projects() {
	return (
		<Grid2
			container
			direction={"column"}
			sx={{ minWidth: "35%" }}>
			<Grid2 item>Projects</Grid2>
			<Grid2>Project 1</Grid2>
		</Grid2>
	);
}

export default Projects;
