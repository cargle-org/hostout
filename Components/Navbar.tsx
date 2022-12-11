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
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(200)
	const [vanish, setVanish] = useState({
		bell: false,
		trending: false,
		hangouts: false,
		host: false,
		avater: false,
		menu: false,
		search: false,
	});
	useEffect(() => {
		window.addEventListener("resize", () => {
			console.log(window.innerHeight, window.innerWidth);
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		});
	}, []);
	console.log(vanish);

	const image = "/logo.svg";

	useEffect(() => {
		if (width > 1237)
			setVanish({
				bell: false,
				trending: false,
				hangouts: false,
				host: false,
				avater: false,
				menu: true,
				search: false,
			});
		if (width <= 1237 && width > 1114)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: false,
				avater: false,
				menu: false,
				search: false
			});
		if (width <= 1114 && width > 830)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: true,
				avater: false,
				menu: false,
				search: false
			});
		if (width <= 830 && width > 600)
			setVanish({
				bell: true,
				trending: true,
				hangouts: true,
				host: true,
				avater: true,
				menu: false,
				search: false
			});
			if (width <= 600 && width > 0)
			setVanish({
				bell: true,
				trending: true,
				hangouts: true,
				host: true,
				avater: true,
				menu: true,
				search: true
			});
	}, [width]);
	return (
		<div className="nav-bar">
			<Link href="#">
				{width < 601 ? (
					<Image
						src={image}
						width={500}
						height={500}
						className="nav-bar-image"
					/>
				) : (
					<Image
						src={image}	
						width={200}
						height={300}
						className="nav-bar-image"
					/>
				)}
			</Link>
			{vanish.search === false && <div className="nav-form">
				<input placeholder="Search events" />
				<div className="nav-search">
					<a href="#">
						<FontAwesomeIcon icon={faSearch} />
					</a>
				</div>
			</div>}

			<ul className="ul-li">
				{vanish.menu === true && width > 600 && (
					<li className="angle-down">
						<IconButton>
							<FontAwesomeIcon icon={faAngleDown} className="angle-down-icon" />
						</IconButton>
					</li>
				)}
				{vanish.avater === false && (
					<li>
						<IconButton>
							<Image src="/avatar.png" width={60} height={60} alt="image" />
						</IconButton>
					</li>
				)}
				{vanish.bell === false && (
					<li id="bell">
						<IconButton>
							<FontAwesomeIcon icon={faBell} className="bell-icon" />
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
							<a className="nav-option">Hangouts</a>
						</Link>
					</li>
				)}
				{vanish.trending === false && (
					<li>
						<Link href="/eventspage">
							<a className="nav-option">Trending</a>
						</Link>
					</li>
				)}
			</ul>
			{vanish.menu === false && (
				<div className="menu">
					<IconButton>
						<MenuIcon className="menu-icon" />
					</IconButton>
				</div>
			)}
		</div>
	);
};

export default Navbar;
