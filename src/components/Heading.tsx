import React from "react";

const Heading: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className="text-transform: uppercase  px-4 md:px-6 lg:px-10 mb-4 font-bold text-sm ">
			{title}
		</div>
	);
};

export default Heading;
