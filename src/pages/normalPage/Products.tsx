import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Card from "../../components/Card";

import ErrorComponent from "../../components/ErrorComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ALL_ITEMS } from "../../constants/constants";
import { options } from "../../utils/options";
import { IProductData } from "../../utils/types";
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
		if (products.length === 0 && id === ALL_ITEMS) {
			dispatch(getProducts(options("GET", "list")));
		}
	}, []);

	return (
		<>
			{id !== ALL_ITEMS ? (
				searchedQuery.loading
			) : loading ? (
				<LoadingSpinner />
			) : id !== ALL_ITEMS ? (
				searchedQuery.error
			) : error ? (
				<ErrorComponent message={error} />
			) : id !== ALL_ITEMS ? (
				searchedQuery.searchedData.length
			) : products.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
					{id !== ALL_ITEMS
						? searchedQuery.searchedData
						: products.map((ele: IProductData) => (
								<Card key={ele.sku} item={ele} />
						  ))}
				</div>
			) : (
				<p>No data found</p>
			)}
		</>
	);
};

export default Products;
