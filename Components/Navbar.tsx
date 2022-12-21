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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { InfinitySpin } from "react-loader-spinner";
import { IconButton, toggleButtonClasses } from "@mui/material";

const Navbar = () => {
	const hasWindow = typeof window !== "undefined";
	const image = "/logo.svg";
	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : null;
		return width;
	}
	const [width, setWidth] = useState(getWindowDimensions());
	const [active, setActive] = useState(false);
	const [vanish, setVanish] = useState({
		bell: false,
		trending: false,
		hangouts: false,
		host: false,
		avater: false,
		menu: false,
		search: false,
		toggle: true,
	});

	useEffect(() => {
		window.addEventListener("resize", async () => {
			await setWidth(window.innerWidth);
		});
	}, []);

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
				toggle: true,
			});
		if (width <= 1237 && width > 1114)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: false,
				avater: false,
				menu: false,
				search: false,
				toggle: true,
			});
		if (width <= 1114 && width > 830)
			setVanish({
				bell: false,
				trending: true,
				hangouts: true,
				host: true,
				avater: false,
				menu: false,
				search: false,
				toggle: true,
			});
		if (width <= 830 && width > 600)
			setVanish({
				bell: true,
				trending: true,
				hangouts: true,
				host: true,
				avater: true,
				menu: false,
				search: false,
				toggle: true,
			});
		if (width <= 600 && width > 0)
			setVanish({
				bell: true,
				trending: true,
				hangouts: true,
				host: true,
				avater: true,
				menu: true,
				search: true,
				toggle: false,
			});
		setActive(false);
	}, [width]);
	return (
		<>
			<div className="nav-bar">
				<Link href="#">
					{width < 601 ? (
						<Image
							src={image}
							width={550}
							height={500}
							alt=""
							className="nav-bar-image"
						/>
					) : (
						<Image
							src={image}
							width={200}
							height={300}
							alt=""
							className="nav-bar-image"
						/>
					)}
				</Link>
				{vanish.search === false && (
					<div className="nav-form">
						<input placeholder="Search events" />
						<div className="nav-search">
							<a href="#">
								<FontAwesomeIcon icon={faSearch} />
							</a>
						</div>
					</div>
				)}

				{
					<ul className="ul-li">
						{/* {vanish.menu === true && width > 600 && ( */}
						<li className="angle-down">
							{vanish.menu === true && width > 600 && (
								<IconButton onClick={() => setActive(!active)}>
									<FontAwesomeIcon
										icon={faAngleDown}
										className="angle-down-icon"
									/>
								</IconButton>
							)}
							{vanish.toggle === false && (
								<>
									{active ? (
										<IconButton
											onClick={() => setActive(!active)}
											className="float"
										>
											<KeyboardArrowDownIcon fontSize="large" />
										</IconButton>
									) : (
										<IconButton
											onClick={() => setActive(!active)}
											className="float"
										>
											<KeyboardArrowLeftIcon
												fontSize="large"
												className="angle-left-icon"
											/>
										</IconButton>
									)}
								</>
							)}
						</li>
						{/* )} */}
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
				}
				{vanish.menu === false && (
					<div className="menu">
						<IconButton onClick={() => setActive(!active)}>
							<MenuIcon className="menu-icon" />
						</IconButton>
					</div>
				)}
			</div>
			{active && (
				<div className="drop__down">
					<ul className="drop__down__list">
						<li className="drop__down__item">
							<Link href="/">Home</Link>
						</li>
						{vanish.avater === true && (
							<li className="drop__down__item">Profile</li>
						)}
						{vanish.hangouts === true && (
							<li className="drop__down__item">Trending</li>
						)}
						{vanish.trending === true && (
							<li className="drop__down__item">
								<Link href="/eventspage">Hangouts</Link>
							</li>
						)}
						{vanish.host === true && (
							<li className="drop__down__item">
								<Link href="/eventsinput">Host event</Link>
							</li>
						)}
						{vanish.bell === true && (
							<li className="drop__down__item">Notification</li>
						)}
						<li className="drop__down__item">Join Waitlist</li>
						<li className="drop__down__item">
							<Link href="/login">Sign in</Link>
						</li>
						<li className="drop__down__item">
							<Link href="/register">Sign up</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
