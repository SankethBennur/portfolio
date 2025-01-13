import React from "react";
import Me from "./../assets/me.jpeg";
import { Box } from "@mui/material";

function MyPicture() {
	return (
		<Box
			position="relative"
			display="flex"
			sx={{
				my: 1,
				py: 2,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Box
				component="img"
				src={Me}
				alt={"post"}
				width="225px"
				height="225px"
				position="relative"
				display="flex"
				sx={{
					objectFit: "cover",
					boxShadow: "0 0 64px rgba(0, 255, 210, 1)",
					borderRadius: "50%",
					transformOrigin: "top",
				}}
			/>
		</Box>
	);
}

export default MyPicture;
