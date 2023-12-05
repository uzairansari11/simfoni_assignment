import React from "react";

const Heading: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className="text-transform: uppercase  px-28 mb-4 font-bold text-sm ">
			{title}
		</div>
	);
};

export default Heading;
