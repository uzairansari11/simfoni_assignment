import React, { useDeferredValue, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const SearchBar = () => {
	const [searchedText, setSearchedText] = useState<string>("");
	const [show, setShow] = useState(false);
	const [data, setData] = useState([
		{ id: 1, title: "hello i am" },

	]);

	const differedValue = useDeferredValue(searchedText);

	const searchedQuery = useMemo(() => {
		console.log(differedValue);
		// Perform some computation with differedValue if needed
		return `Searched for: ${differedValue}`;
	}, [differedValue]);
	const handleItemClick = () => {
		setSearchedText("");
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchedText(value);
		setShow(value.length > 0); // Update show state based on input value
	};

	return (
		<div className="relative">
			<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden ">
				<input
					type="text"
					className="py-1 px-4 w-full focus:outline-none bg-white font-semibold"
					placeholder="Search"
					value={searchedText}
					onChange={handleChange}
				/>
				<button className="bg-teal-500 px-8 py-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
						/>
					</svg>
				</button>
			</div>
			{show && differedValue.length > 0 && (
				<div className="absolute top-12 w-full max-h-40 bg-gray-100 rounded-md overflow-y-auto z-10 hide-scrollbar ">
					{data.map((item) => (
						<Link
							to={`/item/${item?.id}`}
							key={item?.id}
							className="hover:no-underline hover:bg-gray-200"
							onClick={handleItemClick}
						>
							<p className="p-2 border-b-2">{item?.title}</p>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
