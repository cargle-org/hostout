import HostEventItem from "./HostEventItem";
const HowToHost = () => {
	return (
		<div id="how-to-host">
			<div className="host-section">
				<div className="host-event">
					<div id="Host-event">
						<h2>How to host an event</h2>
					</div>
					<HostEventItem color="host-event-item" text="Click on host an event to get started" />
					<HostEventItem color="host-event-item" text="Add an event title image or thumbnail" />
					<HostEventItem color="host-event-item" text="Add a restaurant or event location" />
					<HostEventItem color="host-event-item" text="Add event fees and food & drinks menu" />
					<HostEventItem color="host-event-item" text="Create #tags for your event or send out invites" />
					<HostEventItem color="host-event-item" text="Click on create and share your event link" />
				</div>
				<div className="host-logo">
				</div>
			</div>
			<br></br>
		</div>
	);
};
export default HowToHost;
