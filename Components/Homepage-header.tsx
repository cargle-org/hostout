import Link from "next/link";
import Image from "next/image";

const Homehead = () => {
	const image = "/h1-image.png";
	return (
		<div className="flexbox-container">
			<div className="flexbox-1">
				<h1 className="flexbox-item-text">
					Don&apos;t stay <span className="flexbox-item-span">bored</span>, go
					for{" "}
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
			{/* <div className="flexbox-2" style={{backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", overflow: "hidden", backgroundPosition:"center center"}}></div> */}
			<div className="flexbox-2">
				<Image
					alt=""
					src={image}
					width={700}
					height={700}
					className="nav-bar-image"
				/>
			</div>
		</div>
	);
};
export default Homehead;
