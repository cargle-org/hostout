import { useEffect, useState } from "react";
import {
	faAngleDown,
	faBell,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";

const Navbar = () => {
	const [width, setWidth] = useState(1400);
	const [vanish, setVanish] = useState({
		bell: false,
		trending: false,
		hangouts: false,
		host: false,
		avater: false,
	});
	useEffect(() => {
		window.addEventListener("resize", () => {
			console.log(window.innerHeight, window.innerWidth);
			setWidth(window.innerWidth);
		});
	}, []);
	console.log(vanish);

	const image = "/logo.svg";

	useEffect(() => {
		if (width < 1325)
			setVanish({
				bell: false,
				trending: true,
				hangouts: false,
				host: false,
				avater: false,
			});
		if (width > 1325)
			setVanish({
				bell: false,
				trending: false,
				hangouts: false,
				host: false,
				avater: false,
			});
		if (width < 1237)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: false,
				avater: false,
			});
		if (width < 1114)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: true,
				avater: false,
			});
		if (width < 824)
			setVanish({
				bell: true,
				trending: true,
				hangouts: true,
				host: true,
				avater: true,
			});
		// if(width > 600) setVanish({
		// 	bell: false,
		// 	trending: true,
		// })
		console.log(window.innerWidth);
	}, [width]);
	return (
		<div className="nav-bar">
			<Image src={image} width={200} height={300} />
			<div className="nav-form">
				<input placeholder="Search events" />
				<div className="nav-search">
					<a href="#">
						<FontAwesomeIcon icon={faSearch} />
					</a>
				</div>
			</div>

			<ul className="ul-li">
				{/* <li id="angle-down">
					<a>
						<FontAwesomeIcon icon={faAngleDown} />
					</a>
				</li> */}
				{vanish.avater === false && (
					<li>
						<IconButton>
							{/* <div className="nav-img"> */}
							<Image src="/avatar.png" width={60} height={60} alt="image" />
							{/* </div> */}
						</IconButton>
					</li>
				)}
				{vanish.bell === false && (
					<li id="bell">
						<IconButton>
							<FontAwesomeIcon
								icon={faBell}
								style={{ fontSize: "25px", color: "grey", margin: "5px" }}
							/>
						</IconButton>
					</li>
				)}
				{vanish.host === false && (
					<li>
						<Link href="/eventsinput">
							<a className="nav-btn">Host an Event</a>
						</Link>
					</li>
				)}
				{vanish.hangouts === false && (
					<li>
						<Link href="/eventspage">
							<a href="#" className="nav-option">
								Hangouts
							</a>
						</Link>
					</li>
				)}
				{vanish.trending === false && (
					<li>
						<Link href="/eventspage">
							<a href="#" className="nav-option">
								Trending
							</a>
						</Link>
					</li>
				)}
			</ul>
			<div
				style={{
					width: "90px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* <FontAwesomeIcon icon={faAngleDown} style={{fontSize: "20px"}}/> */}
				<MenuIcon style={{ fontSize: "40px" }} />
			</div>
		</div>
	);
};

export default Navbar;
