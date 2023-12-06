import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
interface MultiCarouselProps {
	children: React.ReactNode;
	arrow?:boolean
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ children ,arrow}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 5,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 640 },
			items: 2,
			slidesToSlide: 3,
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 2,
			slidesToSlide: 1,
		},
	};

	return (
		<div className="carousel-container  w-full ">
			<Carousel
				responsive={responsive}
				infinite={true}
				transitionDuration={500}
				containerClass="carousel-container"
				arrows={arrow || false}
				itemClass="carousel-item-padding-40-px"
			>
				{children}
			</Carousel>
		</div>
	);
};

export default MultiCarousel;
