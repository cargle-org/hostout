import {
	faAngleDown,
	faBell,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="nav-bar">
			<div className="nav-form">
				<input placeholder="Search events" />
				<div className="nav-search">
					<a href="#">
						<FontAwesomeIcon icon={faSearch} />
					</a>
				</div>
			</div>

			<ul className="ul-li">
				<li id="angle-down"><a><FontAwesomeIcon icon={faAngleDown} /></a></li>
				<li>
					<div className="nav-img">
						<Image src="/avatar.jpeg" width={70} height={70} alt="image" />
					</div>
				</li>
				<li id="bell">
					<a>
						<FontAwesomeIcon icon={faBell} />
					</a>
				</li>
				<li>
					<Link href="/eventsinput">
						<a className="nav-btn">Host an Event</a>
					</Link>
				</li>
				<li>
					<Link href="/eventspage">
						<a href="#" className="nav-option">
							Hangouts
						</a>
					</Link>
				</li>
				<li>
					<Link href="/eventspage">
						<a href="#" className="nav-option">
							Trending
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
