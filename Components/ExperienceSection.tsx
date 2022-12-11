import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Experience from "./Experience";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1400 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 1400, min: 1094 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1094, min: 726 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 726, min: 0 },
		items: 1,
	},
};

const ExperienceSection = () => {
	return (
		// <div className="about-container-2">
		<Carousel
			swipeable={false}
			draggable={false}
			showDots={true}
			responsive={responsive}
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item"
		>
			<Experience  star5={<StarIcon fontSize="small"/>} name="Jenifer Afolayan" image="/experience-pic-2.jpg"/>
			<Experience  star5={<StarHalfIcon fontSize="small"/>} name="Chike Bright" image="/experience-pic-5.jpg"/>
			<Experience  star5={<StarBorderIcon fontSize="small"/>} name="Ayo Williams" image="/experience-pic-3.jpg"/>
            <Experience  star5={<StarIcon fontSize="small"/>} name="Musa Aminu" image="/experience-pic-1.jpg"/>
			<Experience  star5={<StarHalfIcon fontSize="small"/>} name="Joy Okereke" image="/experience-pic-4.jpg"/>
		</Carousel>
	);
};

export default ExperienceSection;
