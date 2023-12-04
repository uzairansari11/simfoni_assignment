import React from "react";

const SimpleCard: React.FC = () => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-md shadow-sm shadow-slate-400 overflow-hidden md:max-w-2xl border-2">
			<div className="flex flex-col items-center">
				<img
					className="h-28 w-48 object-contain md:w-48"
					src="https://img.freepik.com/free-vector/tomato-juice-design_1284-1150.jpg?size=626&ext=jpg&ga=GA1.1.1200173384.1701117079&semt=ais"
					alt="Placeholder"
				/>
				<div className="flex flex-col p-1">
					<p className="uppercase tracking-wide text-sm font-semibold">
						Category
					</p>
				</div>
			</div>
		</div>
	);
};

export default SimpleCard;
