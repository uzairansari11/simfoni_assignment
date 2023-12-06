import { IProductData } from "../../utils/types";
import { AppAction } from "./action";
import * as types from "./type";

export interface IProducts {
	loading: boolean;
	error: string | boolean;
	data: IProductData[];
	searchedQuery: {
		loading: boolean;
		error: string | boolean;
		searchedData: any[];
	};
}

const initialState: IProducts = {
	loading: false,
	error: false,
	data: [],
	searchedQuery: {
		loading: false,
		error: false,
		searchedData: [],
	},
};

export const ProductReducer = (
	oldState: IProducts = initialState,
	action: AppAction
): IProducts => {
	const { type } = action;
	switch (type) {
		case types.PRODUCT_REQUEST:
			return { ...oldState, loading: true };
		case types.PRODUCT_ERROR:
			return { ...oldState, loading: false, error: action.payload };
		case types.GET_PRODUCTS_SUCCESS:
			return { ...oldState, loading: false, data: action.payload };
		case types.PRODUCTS_SORT:
			return { ...oldState, loading: false, data: action.payload };

		case types.SEARCHED_QUERY_REQUEST:
			return {
				...oldState,
				searchedQuery: { ...oldState.searchedQuery, loading: true },
			};
		case types.SEARCHED_QUERY_ERROR:
			return {
				...oldState,
				searchedQuery: {
					...oldState.searchedQuery,
					loading: false,
					error: action.payload,
				},
			};
		case types.GET_SEARCHED_PRODUCTS:
			return {
				...oldState,
				searchedQuery: {
					...oldState.searchedQuery,
					searchedData: action.payload,
					loading: false,
					error: false,
				},
			};
		default:
			return oldState;
	}
};
