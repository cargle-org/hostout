import Link from "next/link";

const Homehead = () => {
	return (
		<div className="flexbox-container">
			<div className="flexbox-1 flexbox-item">
				<h1 className="flexbox-item-text">
					Don't stay <span className="flexbox-item-span">bored</span>, go for{" "}
				</h1>
				<h1 className="flexbox-item-text-2">
					<span className="flexbox-item-span">Events</span> &{" "}
					<span className="flexbox-item-span">Hangout</span>
				</h1>
				<p className="flexbox-item-p">
					Host or Register an event and hangout, meet new people,
					<br></br>
					have fun and enjoy every bit of your time.
				</p>
				<div className="hp-btn">
					<div className="flexbox-btn-1">
						<Link href="/eventspage">Explore Events</Link>
					</div>
					<div className="flexbox-btn-2">
						<Link href="/eventspage">Learn More</Link>
					</div>
				</div>
			</div>
			<div className="flexbox-2"></div>
		</div>
	);
};
export default Homehead;
