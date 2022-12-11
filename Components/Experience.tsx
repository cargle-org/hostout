import Image from "next/image";
import { faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarIcon from "@mui/icons-material/Star";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Experience = ({ star5, name, image }) => {
	const stars = [4, 3, 2, 1];
	return (
		<div className="experience-card">
			<div className="ex-top">
				<div className="ex-img">
					<Image
						src={image}
						alt=" weeee"
						height={200}
						width={200}
						style={{ borderRadius: "100%" }}
					/>
				</div>
				<div>
					<div className="ex-name">
						<h3>{name}</h3>
					</div>
					<div className="ex-icons">
						{stars.map((star) => {
							return (
								<span>
									<StarIcon fontSize="small"/>
								</span>
							);
						})}
						<span>{star5 || <StarIcon fontSize="small"/>}</span>
						<p>4.9</p>
					</div>
				</div>
			</div>
			<div className="ex-detail">
				<p>
					Hostout connects people together (host and hostee) for hangout and
					events. You can get to attend the event of your choice just by
					searching or checking events that matches your profile tags.
				</p>
				<h3><span>3</span> months ago</h3>
			</div>
		</div>
	);
};
export default Experience;
