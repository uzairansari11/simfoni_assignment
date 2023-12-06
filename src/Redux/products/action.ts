import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse, IProductData } from "../../utils/types";
import { AppDispatch } from "../store";
import * as types from "./type";

/* Interfaces */
export interface IProductRequest {
	type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
	type: typeof types.PRODUCT_ERROR;
	payload: string|boolean;
}

export interface IGetProductSuccess {
	type: typeof types.GET_PRODUCTS_SUCCESS;
	payload: IProductData[];
}
export interface IProductSorted {
	type: typeof types.PRODUCTS_SORT;
	payload: IProductData[];
}
export interface IProductSearched {
	type: typeof types.GET_SEARCHED_PRODUCTS;
	payload: any[];
}

export interface ISearchedQueryRequests {
	type: typeof types.SEARCHED_QUERY_REQUEST;
}

export interface ISearchedQueryError {
	type: typeof types.SEARCHED_QUERY_ERROR;
	payload: string | boolean;
}

export interface IBestSellingRequest {
	type: typeof types.BEST_SELLING_PRODUCT_REQUEST;
}

export interface IBestSellingError {
	type: typeof types.BEST_SELLING_PRODUCT_ERROR;
	payload: string | boolean;
}

export interface IBestSelling {
	type: typeof types.GET_BEST_SELLING_PRODUCTS;
	payload: any[];
}

export interface INewArrivalRequest {
	type: typeof types.NEW_ARRIVAL_PRODUCT_REQUEST;
}

export interface INewArrivalError {
	type: typeof types.NEW_ARRIVAL_PRODUCT_ERROR;
	payload: string | boolean;
}

export interface INewArrival {
	type: typeof types.GET_NEW_ARRIVAL_PRODUCTS;
	payload: any[];
}




export type AppAction =
	| IProductRequest
	| IProductError
	| IGetProductSuccess
	| IProductSorted
	| IProductSearched
	| ISearchedQueryRequests
	| ISearchedQueryError
	| IBestSellingRequest
	| IBestSellingError
	| IBestSelling
	| INewArrivalRequest
	| INewArrivalError
	|INewArrival

/* ---------------------------------------------------------------------------------------- */


/* -----------------------Action Creator-------------------- */
const productRequest = (): IProductRequest => {
	return { type: types.PRODUCT_REQUEST };
};

const productError = (payload: string): IProductError => {
	return { type: types.PRODUCT_ERROR, payload };
};

const getProductSuccess = (data: IProductData[]): IGetProductSuccess => {
	return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};

const productSorted = (data: IProductData[]): IProductSorted => {
	return { type: types.PRODUCTS_SORT, payload: data };
};

const searchedQueryRequest = (): ISearchedQueryRequests => {
	return { type: types.SEARCHED_QUERY_REQUEST };
};

const searchedQueryErrors = (data: string | boolean): ISearchedQueryError => {
	return { type: types.SEARCHED_QUERY_ERROR, payload: data };
};

export const searchedProduct = (data: any[]): IProductSearched => {
	return { type: types.GET_SEARCHED_PRODUCTS, payload: data };
};

export const bestSellingRequest = (): IBestSellingRequest => {
	return { type: types.BEST_SELLING_PRODUCT_REQUEST };
};

export const bestSellingErrors = (data: string | boolean): IBestSellingError => {
	return { type: types.BEST_SELLING_PRODUCT_ERROR, payload: data };
};

export const bestSellingProduct = (data: any[]): IBestSelling => {
	return { type: types.GET_BEST_SELLING_PRODUCTS, payload: data };
};




export const newArrivalRequest = (): INewArrivalRequest => {
	return { type: types.NEW_ARRIVAL_PRODUCT_REQUEST };
};

export const newArrivalErrors = (data: string | boolean): INewArrivalError => {
	return { type: types.NEW_ARRIVAL_PRODUCT_ERROR, payload: data };
};

export const newArrivalProduct = (data: any[]): INewArrival => {
	return { type: types.GET_NEW_ARRIVAL_PRODUCTS, payload: data };
};

/* ---------------------------------------------------------------------------------------- */


/* --------------------------------Functions---------------------- */

/* ---------- Get Products ------------------------------- */
export const getProducts =
	(options: AxiosRequestConfig<any>): any =>
	async (dispatch: AppDispatch) => {
		dispatch(productRequest());

		try {
			let res: AxiosResponse<ApiResponse> = await axios.request(options);
			let finalResponse = res.data.response.data.category.browse.products;
			dispatch(getProductSuccess(finalResponse));
		} catch (error: any) {
			dispatch(productError(error.message));
		}
	};

	/* ----------------Get Product Sorted ---------------- */
export const getProductSorted =
	(data: IProductData[]): any =>
	(dispatch: AppDispatch) => {
		dispatch(productSorted(data));
	};

	/* ---------Search Product ------------------------ */
export const getSearchedProduct =
	(options: AxiosRequestConfig<any>): any =>
	async (dispatch: AppDispatch) => {
		dispatch(searchedQueryRequest());
		try {
			const response = await axios.request(options);
			const data = response.data.response.product_collection;
			if (data.length) {
				dispatch(searchedProduct(data));
			}
		} catch (error: any) {
			dispatch(searchedQueryErrors(error.message));
		}
	};

/* ---------------------------------------------------------------------------------------- */

/* -------------Get Best Selling Products */
export const getBestSellingProduct =
	(options: AxiosRequestConfig<any>): any =>
	async (dispatch: AppDispatch) => {
		dispatch(bestSellingRequest());
		try {
			const response = await axios.request(options);
			const data = response.data.response.product_collection;
			if (data.length) {
				dispatch(bestSellingProduct(data));
			}
		} catch (error: any) {
			dispatch(bestSellingErrors(error.message));
		}
		};
	
/* -------------Get New Arrival Products */
		export const getNewArrivalProduct =
	(options: AxiosRequestConfig<any>): any =>
	async (dispatch: AppDispatch) => {
		dispatch(newArrivalRequest());
		try {
			const response = await axios.request(options);
			const data = response.data.response.product_collection;
			if (data.length) {
				dispatch(newArrivalProduct(data));
			}
		} catch (error: any) {
			dispatch(newArrivalErrors(error.message));
		}
	};