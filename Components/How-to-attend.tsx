import HostEventItem from "./HostEventItem";

const HowToAttend = () => {
	return (
		<div id="how-to-attend">
			<div className="attend-logo"></div>
			<div className="attend-event">
				<div id="Attend-event">
					<h2>How to attend an event</h2>
				</div>
				<HostEventItem color="host-event-item-2" text="Explore and search for events you like" />
				<HostEventItem  color="host-event-item-2" text="Search with a #tag or related words" />
				<HostEventItem color="host-event-item-2" text="Choose from our list of events to join by IV or link" />
				<HostEventItem color="host-event-item-2" text="Check the event description menu for payments" />
				<HostEventItem color="host-event-item-2" text="Add menus you would like to take from the menu list" />
				<HostEventItem color="host-event-item-2" text="Click on register now to proceed to payments" />
				<HostEventItem color="host-event-item-2" text="Complete your payment and wait for the event" />
			</div>
		</div>
	);
};
export default HowToAttend;
