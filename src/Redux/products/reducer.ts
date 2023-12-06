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
	bestSelling: {
		loading: boolean;
		error: string | boolean;
		bestSellingData: any[];
	};

	newArrival: {
		loading: boolean;
		error: string | boolean;
		newArrivalData: any[];
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

	bestSelling: {
		loading: false,
		error: false,
		bestSellingData: [],
	},
	newArrival: {
		loading: false,
		error: false,
		newArrivalData: [],
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

		
		case types.BEST_SELLING_PRODUCT_REQUEST:
			return {
				...oldState,
				bestSelling: { ...oldState.bestSelling, loading: true },
			};

		case types.BEST_SELLING_PRODUCT_ERROR:
			return {
				...oldState,
				bestSelling: {
					...oldState.bestSelling,
					loading: false,
					error: action.payload,
				},
			};
		case types.GET_BEST_SELLING_PRODUCTS:
			return {
				...oldState,
				bestSelling: {
					...oldState.bestSelling,
					bestSellingData: action.payload,
					loading: false,
					error: false,
				},
			};

		case types.NEW_ARRIVAL_PRODUCT_REQUEST:
			return {
				...oldState,
				newArrival: { ...oldState.newArrival, loading: true },
			};

		case types.NEW_ARRIVAL_PRODUCT_ERROR:
			return {
				...oldState,
				newArrival: {
					...oldState.newArrival,
					loading: false,
					error: action.payload,
				},
			};
		case types.GET_NEW_ARRIVAL_PRODUCTS:
			return {
				...oldState,
				newArrival: {
					...oldState.newArrival,
					newArrivalData: action.payload,
					loading: false,
					error: false,
				},
			};

		default:
			return oldState;
	}
};
