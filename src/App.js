import React, { useState, useEffect } from 'react';

import Home from "./pages/Home";
import HomeMobile from "./pages/HomeMobile";

function App()
{
	const [is_mobile_device, set_is_mobile_device] = useState(
		window.innerWidth < 750
	);

	useEffect(() =>
	{
		const handle_screen_width_ = () =>
		{
			set_is_mobile_device(window.innerWidth < 750);
		};

		console.log(is_mobile_device);

		// Add Event Listener when component mounts
		window.addEventListener("resize_app", handle_screen_width_);

		// Remove Event Listener when component unmounts
		return () =>
		{
			window.removeEventListener("resize_app", handle_screen_width_);
		};
	}, [is_mobile_device]);

	return (
		<div>
			{
				(is_mobile_device)
					? <HomeMobile />
					: <Home />
			}
		</div>
	);
}

export default App;
