import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import {
	getProductSorted,
	getSearchedSorted,
	productFiltered,
	searchedFiltered,
} from "../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { IProductData } from "../utils/types";
import SearchBar from "./Searchbar";
const Navbar = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector((store) => store.ProductReducer.data);
	const searchedData = useAppSelector(
		(store) => store.ProductReducer.searchedQuery.searchedData
	);
	const location = useLocation();

	const [sortedValue, setSortedValue] = useState<string>("");

	const [showSlider, setShowSlider] = useState<boolean>(false);
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

	const handleDropDownChange = () => {
		setShowSlider(!showSlider);
	};

const handlePriceChange = async (value: number | number[]) => {
	const originalProductData =
		location.pathname !== "/products/allitems"
			? searchedData.slice()
			: product.slice();

	let filteredData: IProductData[] = [];

	if (Array.isArray(value)) {
		setPriceRange(value as [number, number]);

		filteredData = originalProductData.filter(
			(item) => item.price >= value[0] && item.price <= value[1]
		);
	}

	if (location.pathname !== "/products/allitems") {
		dispatch(searchedFiltered(filteredData));
	} else {
		dispatch(productFiltered(filteredData));
	}
};


	const handleSort = (value: string) => {
		const updatedSelectedData =
			location.pathname !== "/products/allitems"
				? [...searchedData]
				: [...product];

		setSortedValue(value);

		let sortedData: IProductData[] = [...updatedSelectedData];

		if (value === "asc") {
			sortedData = updatedSelectedData.sort((a, b) => a.price - b.price);
		} else if (value === "desc") {
			sortedData = updatedSelectedData.sort((a, b) => b.price - a.price);
		} else if (value === "a") {
			sortedData = updatedSelectedData.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		} else if (value === "z") {
			sortedData = updatedSelectedData.sort((a, b) =>
				b.name.localeCompare(a.name)
			);
		}

		if (location.pathname !== "/products/allitems") {
			dispatch(getSearchedSorted(sortedData));
		} else {
			dispatch(getProductSorted(sortedData));
		}
	};

	return (
		<div className=" flex justify-between gap-x-10  py-2 items-center px-4 mt-4">
			<div className="w-full md:w-4/5 ">
				<SearchBar />
			</div>
			<div className=" hidden md:flex w-1/5">
				<button className=" bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded">
					Upload
				</button>
			</div>
			<div className=" hidden w-3/5 md:flex  justify-between gap-x-10">
				<div className="relative inline-block text-left">
					<div className="relative inline-block text-left">
						<div>
							<button
								type="button"
								className="flex justify-center w-full rounded-md border border-gray-300 py-2 px-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none items-center"
								onClick={handleDropDownChange}
							>
								Filter By Price
								<IoMdArrowDropdown />
							</button>
						</div>
						{showSlider && (
							<div className="absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
								<Slider
									min={0}
									max={20000} // Adjust the maximum value based on your price range
									value={priceRange}
									onChange={handlePriceChange}
									range
									
								/>
								<div className="flex justify-between mt-2">
									<span>{priceRange[0]}</span>
									<span>{priceRange[1]}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<select
					className="w-1/2 p-1 rounded-md border-2 border-teal-500 focus:border-teal-500 "
					onChange={(e) => handleSort(e.target.value)}
					value={sortedValue}
				>
					<option selected value="">
						Sort by
					</option>
					<option value="a">A to Z</option>
					<option value="z">Z to A</option>
					<option value="desc">High to Low</option>
					<option value="asc">Low to High</option>
				</select>
			</div>
		</div>
	);
};

export default React.memo(Navbar);
