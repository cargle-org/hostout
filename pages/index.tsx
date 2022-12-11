// Integration stuff
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

// components
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Homehead from "../Components/Homepage-header";
import Card from "../Components/Cards";
import HowToHost from "../Components/How-to-host";
import HowToAttend from "../Components/How-to-attend";

import AnnouncementIcon from "@mui/icons-material/Announcement";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Groups2Icon from "@mui/icons-material/Groups2";
import About from "../Components/About-hostout";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Link from "next/link";
import AddCard from "../Components/AddCard";
import ExperienceSection from "../Components/ExperienceSection";

const Home: NextPage = () => {
	const { topbarTitle } = useContext(AppContext);

	return (
		<div style={{ overflow: "hidden" }}>
			<Head>
				<title>Hostout</title>
				<meta name="description" content="Host and find events near you" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="app">
				<Navbar />
				<Homehead />
				<div className="about1">
					<div id="card-head">
						<h2>Popular events inspired by people’s browsing</h2>
						<Link href="/eventspage">View all</Link>
					</div>
					<div className="card-container">
						<Card image="/group-1.jpg" />
						<Card image="/group-2.jpg" />
						<Card image="/group-3.jpg" />
						<AddCard />
					</div>
					<div className="about-container">
						<div id="About-event">
							<h2>All about Hostout</h2>
						</div>
						<div className="about-container-items">
							<About
								header="What we do"
								text="Hostout connects people together (host and hostee) for hangout and
					events. You can get to attend the event of your choice just by
					searching or checking events that matches your profile tags."
								icon={<AnnouncementIcon color="info" fontSize="large" />}
							/>
							<About
								text="Hostout connects people together (host and hostee) for hangout and
					events. You can get to attend the event of your choice just by
					searching or checking events that matches your profile tags."
								header="All about hosts"
								icon={<EmojiPeopleIcon color="info" fontSize="large" />}
							/>
							<About
								header="All about hostees"
								text="Hostout connects people together (host and hostee) for hangout and
					events. You can get to attend the event of your choice just by
					searching or checking events that matches your profile tags."
								icon={<Groups2Icon color="info" fontSize="large" />}
							/>
						</div>
					</div>
					<HowToHost />
					<HowToAttend />
					<div className="recommended">
						<div id="card-head">
							<h2>Recommended for you </h2>
							<Link href="/eventspage">view all</Link>
						</div>
						<div className="card-container-2">
							<Card image="/group-1.jpg" />
							<Card image="/group-2.jpg" />
							<Card image="/group-3.jpg" />
							<Card image="/group-3.jpg" />
						</div>
					</div>

					<div className="about">
						<div id="Experience-event">
							<h2>People&apos;s experience</h2>
						</div>
							<ExperienceSection/>
						
					</div>
				</div>
				<Footer /> 
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
