// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface MainCarouselProps {
// 	images: { id: number; url: string }[];
// }

// const MainCarousel: React.FC<MainCarouselProps> = ({ images }) => {
// 	const [currentSlide, setCurrentSlide] = useState(0);

// 	const nextSlide = () => {
// 		setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
// 	};

// 	const prevSlide = () => {
// 		setCurrentSlide(
// 			(prevSlide) => (prevSlide - 1 + images.length) % images.length
// 		);
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(nextSlide, 5000);

// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<div className="relative overflow-hidden px-2 mt-4">
// 			<div className="flex items-center justify-center">
// 				{images.map((image, index) => (
// 					<div
// 						key={image.id}
// 						className={`w-full h-48 sm:h-64 md:h-72 lg:h-80 flex-shrink-0 transition-opacity duration-500 ${
// 							index === currentSlide ? "opacity-100" : "opacity-0"
// 						}`}
// 					>
// 						<img
// 							src={image.url}
// 							alt={`imagePlaceholder ${index + 1}`}
// 							className="w-full h-full rounded-md shadow-lg object-cover"
// 						/>
// 					</div>
// 				))}
// 			</div>

// 			<button
// 				className="absolute top-1/2 left-2 transform -translate-y-1/2 text-teal-500 bg-white shadow-sm p-2 w-8 h-14 focus:outline-none rounded-md"
// 				onClick={prevSlide}
// 			>
// 				<FaChevronLeft />
// 			</button>
// 			<button
// 				className="absolute top-1/2 right-2 transform -translate-y-1/2 text-teal-500 bg-white shadow-sm p-2 w-8 h-14 focus:outline-none rounded-md"
// 				onClick={nextSlide}
// 			>
// 				<FaChevronRight />
// 			</button>
// 		</div>
// 	);
// };

// export default MainCarousel;


import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
interface MultiCarouselProps {
	children: React.ReactNode;
}

const MainCarousel: React.FC<MultiCarouselProps> = ({ children }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 640 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<div className="main-carousel-container">
			<Carousel
				responsive={responsive}
				infinite={true}
				transitionDuration={500}
				containerClass="main-carousel-container"
				itemClass="carousel-item-padding-40-px"
				arrows={true}
			>
				{children}
			</Carousel>
		</div>
	);
};

export default MainCarousel;
