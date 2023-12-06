import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getSearchedProduct } from "../../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Card from "../../components/Card";

import ErrorComponent from "../../components/ErrorComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
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
		
			dispatch(getSearchedProduct(options("GET", "search", { keyword: id })));
		}
	}, [dispatch, id, products.length, searchedQuery.searchedData.length]);
	console.log(searchedQuery, "from product pages", id);
	return (
		<>
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-4 gap-3">
				{id === ALL_ITEMS ? (
					loading ? (
						<LoadingSpinner />
					) : error ? (
						<ErrorComponent message={searchedQuery.error} />
					) : products.length > 0 ? (
						products.map((ele) => <Card key={ele.sku} item={ele} />)
					) : (
						<p>No data found</p>
					)
				) : searchedQuery.loading ? (
					<LoadingSpinner />
				) : searchedQuery.error ? (
					<ErrorComponent message={error} />
				) : searchedQuery.searchedData.length > 0 ? (
					searchedQuery.searchedData.map((ele) => (
						<Card key={ele.sku} item={ele} />
					))
				) : (
					<p>No data found</p>
				)}
			</div>
		</>
	);
};

export default Products;
