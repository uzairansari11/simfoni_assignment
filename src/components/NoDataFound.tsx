import React from "react";

const NoDataFound = () => {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="bg-gray-100 shadow-md rounded-md p-3 text-center">
				<h2 className="text-xl font-semibold mb-2">No Data Found</h2>
				<p className="text-gray-600">
					Sorry, we couldn't find any data matching your search.
				</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-12 w-12 mt-6 mx-auto text-gray-400 animate-bounce"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 2a8 8 0 00-6.325 12.92L1.875 15.3a10.001 10.001 0 1122.25 0l-1.8-1.38A8 8 0 0010 2zM6 9a1 1 0 112 0v1a1 1 0 11-2 0V9zm7 0a1 1 0 112 0v1a1 1 0 11-2 0V9z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default NoDataFound;
