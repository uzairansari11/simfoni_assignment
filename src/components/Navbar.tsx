import React, { useState } from "react";
import { getProductSorted } from "../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import SearchBar from "./Searchbar";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector((store) => store.ProductReducer.data);
	const [sortedValue, setSortedValue] = useState<string>("");
const handleSort = (value: string) => {
	setSortedValue(value);
	let sortedData;

	if (value === "asc") {
		sortedData = [...product].sort(
			(a, b) =>
				a.pricing.customerPrice.unitPrice.value -
				b.pricing.customerPrice.unitPrice.value
		);
	} else if (value === "desc") {
		sortedData = [...product].sort(
			(a, b) =>
				b.pricing.customerPrice.unitPrice.value -
				a.pricing.customerPrice.unitPrice.value
		);
	} else if (value === "a") {
		 sortedData = [...product].sort((a, b) => a.name.localeCompare(b.name));
	} else if (value === "z") {
		sortedData = [...product].sort((a, b) => b.name.localeCompare(a.name));
	}
	
	else {
		// Handle default sorting or no sorting case
		sortedData = [...product];
	}

	dispatch(getProductSorted(sortedData));
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
			<div  className=" hidden w-3/5 md:flex  justify-between gap-x-10">
				<select className="w-1/2 p-1 rounded-md border-2focus:border-teal-500 justify-between ">
					<option disabled selected>
						Filter
					</option>
					<option>Hello</option>
					<option>Hello</option>
				</select>
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
