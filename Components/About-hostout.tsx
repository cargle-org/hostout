import Image from "next/image";
{
	/* <FontAwesomeIcon icon="fa-solid fa-comment-exclamation" /> */
}
const About = ({icon, text, header}) => {
	return (
		<div className="about-card">
			<div className="about-img">
				{icon}
			</div>
			<div className="about-title">
				<h2>{header}</h2>
			</div>
			<div className="about-details">
				<p>
					{text}
				</p>
			</div>
		</div>
	);
};
export default About;
