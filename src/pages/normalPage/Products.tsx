import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	getProducts,
	getSavedSearchedResult,
	getSearchedProduct,
} from "../../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Card from "../../components/Card";

import ErrorComponent from "../../components/ErrorComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
import NoDataFound from "../../components/NoDataFound";
import { ALL_ITEMS } from "../../constants/constants";
import { options } from "../../utils/options";
const Products: React.FC = () => {
	const { id } = useParams<string>();
	const {
		data: products,
		loading,
		error,
		searchedQuery,
	} = useAppSelector((store) => store.ProductReducer);

	const dispatch = useAppDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (products.length === 0 && id === ALL_ITEMS) {
			dispatch(getProducts(options("GET", "list")));
		}
		if (searchedQuery.searchedData.length === 0 && id !== ALL_ITEMS) {
			const cachedDataString = sessionStorage.getItem(id || "");
			if (cachedDataString) {
				const cachedData = JSON.parse(cachedDataString);
				dispatch(getSavedSearchedResult(cachedData));
			} else {
				dispatch(getSearchedProduct(options("GET", "search", { keyword: id })));
			}
		}
	}, [dispatch, id, products.length, searchedQuery.searchedData.length]);
	console.log(searchedQuery, "from product pages", typeof id);
	return (
		<>
			{id === ALL_ITEMS ? (
				loading ? (
					<LoadingSpinner height="100vh" size={30} />
				) : error ? (
					<ErrorComponent message={searchedQuery.error} height="100vh" />
				) : products.length > 0 ? (
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-4 gap-3">
						{products.map((ele) => (
							<Card key={ele.sku} item={ele} />
						))}
					</div>
				) : (
					<NoDataFound />
				)
			) : searchedQuery.loading ? (
				<LoadingSpinner height="100vh" size={30} />
			) : searchedQuery.error ? (
				<ErrorComponent message={error} height="100vh" />
			) : searchedQuery.searchedData.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-4 gap-3">
					{searchedQuery.searchedData.map((ele) => (
						<Card key={ele.sku} item={ele} />
					))}
				</div>
			) : (
				<NoDataFound />
			)}
		</>
	);
};

export default Products;
