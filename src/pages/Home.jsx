import React from "react";

import TopSection from "./sections/TopSection";
import MiddleSection from "./sections/MiddleSection";

import { Grid2 } from "@mui/material";

function Home() {
	return (
		<Grid2
			container
			direction="column"
			sx={{
				height: "100vh",
			}}>
			<TopSection />
			<MiddleSection />
		</Grid2>
	);
}

export default Home;
