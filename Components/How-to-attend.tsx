import HostEventItem from "./HostEventItem";
import Image from "next/image";
import { useEffect, useState } from "react";

const HowToAttend = () => {
	const image = "/attend-image.png";
	const backgroundImage = "/bg-image.svg";
	function getWindowDimensions() {
		const hasWindow = typeof window !== "undefined";
		const width = hasWindow ? window.innerWidth : null;
		return width;
	}
	const [width, setWidth] = useState(getWindowDimensions() || 600);
	useEffect(() => {
		window.addEventListener("resize", async () => {
			await setWidth(window.innerWidth);
		});
	}, []);
	return (
		<div
			id="how-to-attend"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="attend-logo">
				{width > 594 && (
					<Image
						src={image}
						alt=""
						width={600}
						height={700}
						className="nav-bar-image"
					/>
				)}
				{width < 595 && width >= 444 && (
					<Image
						src={image}
						width={400}
						height={500}
						alt=""
						className="nav-bar-image"
					/>
				)}
				{width < 444 && (
					<Image
						src={image}
						width={300}
						height={400}
						alt=""
						className="nav-bar-image"
					/>
				)}
			</div>
			<div className="attend-event">
				<div id="Attend-event">
					<h2>How to attend an event</h2>
				</div>
				<HostEventItem
					color="host-event-item-2"
					text="Explore and search for events you like"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Search with a #tag or related words"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Choose from our list of events to join by IV or link"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Check the event description menu for payments"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Add menus you would like to take from the menu list"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Click on register now to proceed to payments"
				/>
				<HostEventItem
					color="host-event-item-2"
					text="Complete your payment and wait for the event"
				/>
			</div>
		</div>
	);
};
export default HowToAttend;
