import HostEventItem from "./HostEventItem";

const HowToAttend = () => {
	return (
		<div id="how-to-attend">
			<div className="attend-logo"></div>
			<div className="attend-event">
				<div id="Attend-event">
					<h2>How to attend an event</h2>
				</div>
				<HostEventItem text="Explore and search for events you like" />
				<HostEventItem text="Search with a #tag or related words" />
				<HostEventItem text="Choose from our list of events to join by IV or link" />
				<HostEventItem text="Check the event description menu for payments" />
				<HostEventItem text="Add menus you would like to take from the menu list" />
				<HostEventItem text="Click on register now to proceed to payments" />
				<HostEventItem text="Complete your payment and wait for the event" />
			</div>
		</div>
	);
};
export default HowToAttend;
