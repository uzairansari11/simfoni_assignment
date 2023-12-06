import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSearchedProduct } from "../Redux/products/action";
import { useAppDispatch } from "../Redux/store";
import { options } from "../utils/options";

interface Product {
	sku: string;
	name: string;
	// Add other necessary fields
}

const SearchBar: React.FC = () => {
	const [searchedText, setSearchedText] = useState<string>("");
	const [show, setShow] = useState<boolean>(false);
	const [suggestions, setSuggestions] = useState<Product[]>([]);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSearchResult = () => {
		dispatch(
			getSearchedProduct(options("GET", "search", { keyword: searchedText }))
		);
		navigate(`/products/${searchedText}`);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchedText(value);
	};

	return (
		<div className="relative">
			<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
				<input
					type="text"
					className="py-1 px-4 w-full focus:outline-none bg-white font-semibold"
					placeholder="Search"
					value={searchedText}
					onChange={handleInputChange}
				/>
				<button className="bg-teal-500 px-8 py-1" onClick={handleSearchResult}>
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
			{show && suggestions.length > 0 && (
				<div className="absolute top-9 w-full max-h-40 bg-teal-100 rounded-md overflow-y-auto z-50 hide-scrollbar">
					{suggestions.map((item) => (
						<Link
							to={`/item/${item.sku}`} // Update with proper path
							key={item.sku}
							className="hover:no-underline hover:bg-gray-200"
							onClick={() => {
								setSearchedText("");
								setShow(false);
							}}
						>
							<p className="py-1 px-4 border-b-2">{item.name}</p>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
