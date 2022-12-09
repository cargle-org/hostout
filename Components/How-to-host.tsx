import HostEventItem from "./HostEventItem";
const HowToHost = () => {
	return (
		<div id="how-to-host">
			<div className="host-section">
				<div className="host-event">
					<div id="Host-event">
						<h2>How to host an event</h2>
					</div>
					<HostEventItem text="Click on host an event to get started" />
					<HostEventItem text="Add an event title image or thumbnail" />
					<HostEventItem text="Add a restaurant or event location" />
					<HostEventItem text="Add event fees and food & drinks menu" />
					<HostEventItem text="Create #tags for your event or send out invites" />
					<HostEventItem text="Click on create and share your event link" />
				</div>
				<div className="host-logo">
				</div>
			</div>
			<br></br>
		</div>
	);
};
export default HowToHost;
