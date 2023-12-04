import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
interface MultiCarouselProps {
	children: React.ReactNode;
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ children }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 5,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 640 },
			items: 5,
			slidesToSlide: 3,
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 5,
			slidesToSlide: 3,
		},
	};

	return (
		<div className="carousel-container">
			<Carousel
				responsive={responsive}
				infinite={true}
				transitionDuration={500}
				containerClass="carousel-container"
				itemClass="carousel-item-padding-40-px"
				arrows={true}
			>
				{children}
			</Carousel>
		</div>
	);
};

export default MultiCarousel;
