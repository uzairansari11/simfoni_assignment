import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import {
	getSavedSearchedResult,
	getSearchedProduct,
} from "../Redux/products/action";
import { useAppDispatch } from "../Redux/store";
import { options } from "../utils/options";
const SearchBar: React.FC = () => {
	const [searchedText, setSearchedText] = useState<string>("");
	const [show, setShow] = useState<boolean>(false);
	const [suggestions, setSuggestions] = useState<any[]>([]);
	const [showPastSearches, setShowPastSearches] = useState<boolean>(false);
	const [pastSearch, setPastSearch] = useState<any[]>([]);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (
			searchInputRef.current &&
			!searchInputRef.current.contains(event.target as Node)
		) {
			setShow(false);
			setShowPastSearches(false);
		}
	}, []);

	const saveSearchToSessionStorage = (searchTerm: string) => {
		const pastSearches = sessionStorage.getItem("pastSearches");
		let searches = [];
		if (pastSearches) {
			searches = JSON.parse(pastSearches);
		}
		searches.push(searchTerm);
		sessionStorage.setItem("pastSearches", JSON.stringify(searches));
	};

	// Function to handle search result
	const handleSearchResult = () => {
		if (searchedText.trim() === "") {
			return;
		}
		if (sessionStorage.getItem(searchedText)) {
			const cachedData = JSON.parse(sessionStorage.getItem(searchedText)!);
			dispatch(getSavedSearchedResult(cachedData));
		} else {
			dispatch(
				getSearchedProduct(options("GET", "products/search", { keyword: searchedText }))
			);
		}
		saveSearchToSessionStorage(searchedText);
		setSearchedText("");
		navigate(`/products/${searchedText}`);
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);
	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchedText(value);
	};

	useEffect(() => {
		const debouncedSearch = setTimeout(() => {
			if (searchedText.trim() !== "") {
				axios
					.request(options("GET", "products/search", { keyword: searchedText }))
					.then((response) => {
						const data = response.data.response.product_collection;
						if (data.length > 0) {
							setSuggestions(data);
							setShow(true);
							sessionStorage.setItem(searchedText, JSON.stringify(data));
						}
					})
					.catch((error) => {
						console.error("Error fetching suggestions:", error);
					});
			} else {
				setShow(false);
				setSuggestions([]);
			}
		}, 2000);

		return () => {
			clearTimeout(debouncedSearch);
		};
	}, [searchedText]);
	const getPastSearches = () => {
		const pastSearches = sessionStorage.getItem("pastSearches");
		if (pastSearches) {
			return JSON.parse(pastSearches);
		}
		return [];
	};
	const handleInputBoxClick = () => {
		const pastSearches = getPastSearches();
		setPastSearch(pastSearches); // Set past searches as suggestions
		setShow(true);
		setShowPastSearches(true); // Show past searches dropdown
	};

	return (
		<div className="relative" ref={searchInputRef}>
			<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
				<input
					type="text"
					className="py-1 px-4 w-full focus:outline-none bg-white font-semibold"
					placeholder="Search"
					value={searchedText}
					onChange={handleInputChange}
					onClick={handleInputBoxClick}
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
				<div
					style={{ zIndex: 200 }}
					className="absolute top-9 w-full max-h-40 bg-teal-100 rounded-md overflow-y-auto  hide-scrollbar hide-scrollbar"
				>
					{suggestions.map((item) => (
						<Link
							to={`/products/${searchedText}`} // Update with proper path
							key={item.sku}
							className="hover:no-underline hover:bg-gray-200"
							onClick={() => {
								setSearchedText("");
								setShow(false);
							}}
						>
							{" "}
							<p className="py-1 px-4 border-b-2">{item.name}</p>
						</Link>
					))}
				</div>
			)}

			{searchedText.trim() === "" &&
				showPastSearches &&
				pastSearch.length > 0 && (
					<>
						<div
							style={{ zIndex: 200 }}
							className="absolute top-9 w-full max-h-40 bg-teal-100 rounded-md overflow-y-auto hide-scrollbar"
						>
							<p className="text-red-800 font-md font-semibold border-b-2 bg-slate-400 py-1 px-2">
								Trending Searches
							</p>
							{pastSearch.map((item, index) => (
								<Link
									to={`/products/${item}`} // Update with proper path
									key={index}
									className="hover:no-underline hover:bg-gray-200"
									onClick={() => {
										setSearchedText("");
										setShow(false);
									}}
								>
									<p className="py-1 px-4 border-b-2 w-full">{item}</p>
								</Link>
							))}
						</div>
					</>
				)}
		</div>
	);
};

export default SearchBar;
