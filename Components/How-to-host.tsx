import HostEventItem from "./HostEventItem";
import Image from "next/image";
import { useEffect, useState } from "react";
const HowToHost = () => {
	const image = "/host-image.png";
	function getWindowDimensions() {
		const hasWindow = typeof window !== "undefined";
		const width = hasWindow ? window.innerWidth : null;
		return width;
	}
	const [width, setWidth] = useState(getWindowDimensions() || 594);
	console.log(width);
	useEffect(() => {
		window.addEventListener("resize", async () => {
			await setWidth(window.innerWidth);
		});
	}, []);

	return (
		<div id="how-to-host">
			<div className="host-section">
				<div className="host-event">
					<div id="Host-event">
						<h2>How to host an event</h2>
					</div>
					<HostEventItem
						color="host-event-item"
						text="Click on host an event to get started"
					/>
					<HostEventItem
						color="host-event-item"
						text="Add an event title image or thumbnail"
					/>
					<HostEventItem
						color="host-event-item"
						text="Add a restaurant or event location"
					/>
					<HostEventItem
						color="host-event-item"
						text="Add event fees and food & drinks menu"
					/>
					<HostEventItem
						color="host-event-item"
						text="Create #tags for your event or send out invites"
					/>
					<HostEventItem
						color="host-event-item"
						text="Click on create and share your event link"
					/>
				</div>
				<div className="host-logo">
					{width < 594 ? (
						<Image
							src={image}
							width={400}
							height={500}
							alt=""
							className="nav-bar-image"
						/>
					) : (
						<Image
							src={image}
							width={600}
							height={700}
							alt=""
							className="nav-bar-image"
						/>
					)}
				</div>
			</div>
			<br></br>
		</div>
	);
};
export default HowToHost;
