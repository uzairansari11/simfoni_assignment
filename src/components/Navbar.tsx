import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import {
	getProductSorted,
	getProducts,
	getSearchedProduct,
	getSearchedSorted,
} from "../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { IProductData } from "../utils/types";
import SearchBar from "./Searchbar";
import { options } from "../utils/options";
const Navbar = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector((store) => store.ProductReducer.data);
	const searchedData = useAppSelector(
		(store) => store.ProductReducer.searchedQuery.searchedData
	);
	const location = useLocation();
	const [sortedValue, setSortedValue] = useState<string>("");
	const [maxPrice, setMaxPrice] = useState<number>(20000);
	const [showFilter, setShowFilter] = useState<boolean>(false);
	console.log(location.pathname.split("/")[2], "from nav");
	const handleDropDownChange = () => {
		setShowFilter(!showFilter);
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
	const handleFilterApply = () => {
		console.log("hello");
		setShowFilter(false);

		if (location.pathname !== "/products/allitems") {
			dispatch(
				getSearchedProduct(
					options("GET", "products/search", {
						keyword: location.pathname.split("/")[2],
						filters: `item_price~${maxPrice}`,
					})
				)
			);
		} else {
			console.log("inside dispatch");
			dispatch(
				getProducts(
					options("GET", "products/search", {
						keyword: "All",
						filters: `item_price~${maxPrice}`,
					})
				)
			);
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
						{showFilter && (
							<div className="absolute z-10 mt-2 w-52 bg-white rounded-lg shadow-lg p-4 gap-4">
								<div className="flex items-center justify-between mb-2 gap-4">
									<input
										type="number"
										placeholder="Min Price"
										disabled
										className="w-1/2 py-1 px-2 border rounded-md focus:outline-none"
									/>
									<input
										type="number"
										placeholder="Max Price"
										value={maxPrice}
										onChange={(e) => setMaxPrice(parseInt(e.target.value))}
										className="w-1/2 py-1 px-2 border rounded-md focus:outline-none"
									/>
								</div>
								<button
									type="button"
									onClick={handleFilterApply}
									className="w-full py-2 px-4 bg-teal-50 text-black rounded-md hover:bg-teal-500 focus:outline-none"
								>
									Apply Filter
								</button>
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
