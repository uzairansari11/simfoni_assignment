import React from "react";
import { IoIosArrowUp } from "react-icons/io";
const GoTopButton: React.FC = () => {
	const handleScrollToTop: () => void = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="fixed z-10 right-7 bottom-10">
			<button
				className="bg-orange-500 hover:bg-orange-600 text-white font-bold  border border-orange-600 rounded-full w-10 h-10 flex items-center justify-center"
				onClick={handleScrollToTop}
			>
				<IoIosArrowUp />
			</button>
		</div>
	);
};

export default GoTopButton;
