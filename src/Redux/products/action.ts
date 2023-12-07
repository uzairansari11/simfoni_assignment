import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IError, IProductData } from "../../utils/types";
import { AppDispatch } from "../store";
import * as types from "./type";

/* Interfaces */
export interface IProductRequest {
	type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
	type: typeof types.PRODUCT_ERROR;
	payload: IError;
}

export interface IGetProductSuccess {
	type: typeof types.GET_PRODUCTS_SUCCESS;
	payload: IProductData[];
}
export interface IProductSorted {
	type: typeof types.PRODUCTS_SORT;
	payload: IProductData[];
}

export interface ISearchedSorted {
	type: typeof types.SEARCHED_SORT;
	payload: IProductData[];
}

export interface IProductSearched {
	type: typeof types.GET_SEARCHED_PRODUCTS;
	payload: IProductData[];
}

export interface ISearchedQueryRequests {
	type: typeof types.SEARCHED_QUERY_REQUEST;
}

export interface ISearchedQueryError {
	type: typeof types.SEARCHED_QUERY_ERROR;
	payload: IError;
}

export interface IBestSellingRequest {
	type: typeof types.BEST_SELLING_PRODUCT_REQUEST;
}

export interface IBestSellingError {
	type: typeof types.BEST_SELLING_PRODUCT_ERROR;
	payload: IError;
}

export interface IBestSelling {
	type: typeof types.GET_BEST_SELLING_PRODUCTS;
	payload: IProductData[];
}

export interface INewArrivalRequest {
	type: typeof types.NEW_ARRIVAL_PRODUCT_REQUEST;
}

export interface INewArrivalError {
	type: typeof types.NEW_ARRIVAL_PRODUCT_ERROR;
	payload: IError;
}

export interface INewArrival {
	type: typeof types.GET_NEW_ARRIVAL_PRODUCTS;
	payload: IProductData[];
}


export interface IBestSellingCategoryRequest {
	type: typeof types.BEST_SELLING_CATEGORY_PRODUCT_REQUEST;
}

export interface IBestSellingCategoryError {
	type: typeof types.BEST_SELLING_CATEGORY_PRODUCT_ERROR;
	payload: IError;
}

export interface IBestSellingCategory {
	type: typeof types.GET_BEST_SELLING_CATEGORY_PRODUCTS;
	payload: IProductData[];
}

export interface ITopSupplierRequest {
	type: typeof types.TOP_SUPPLIERS_PRODUCTS_REQUEST;
}

export interface ITopSupplierError {
	type: typeof types.TOP_SUPPLIERS_PRODUCTS_ERROR;
	payload: IError;
}

export interface ITopSupplier {
	type: typeof types.GET_TOP_SUPPLIERS_PRODUCTS;
	payload: IProductData[];
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
	| INewArrival
	| ISearchedSorted
	| IBestSellingCategoryError
	| IBestSellingCategoryRequest
	| IBestSellingCategory
	| ITopSupplierRequest
	| ITopSupplierError
	| ITopSupplier;

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

const searchedQueryErrors = (data:IError): ISearchedQueryError => {
	return { type: types.SEARCHED_QUERY_ERROR, payload: data };
};

export const searchedProduct = (data: IProductData[]): IProductSearched => {
	return { type: types.GET_SEARCHED_PRODUCTS, payload: data };
};

const searchedSorted = (data: IProductData[]): ISearchedSorted => {
	return { type: types.SEARCHED_SORT, payload: data };
};

export const bestSellingRequest = (): IBestSellingRequest => {
	return { type: types.BEST_SELLING_PRODUCT_REQUEST };
};

export const bestSellingErrors = (
	data: IError
): IBestSellingError => {
	return { type: types.BEST_SELLING_PRODUCT_ERROR, payload: data };
};

export const bestSellingProduct = (data: IProductData[]): IBestSelling => {
	return { type: types.GET_BEST_SELLING_PRODUCTS, payload: data };
};

export const newArrivalRequest = (): INewArrivalRequest => {
	return { type: types.NEW_ARRIVAL_PRODUCT_REQUEST };
};

export const newArrivalErrors = (data: IError): INewArrivalError => {
	return { type: types.NEW_ARRIVAL_PRODUCT_ERROR, payload: data };
};

export const newArrivalProduct = (data: IProductData[]): INewArrival => {
	return { type: types.GET_NEW_ARRIVAL_PRODUCTS, payload: data };
};

export const bestSellingCategoryRequest = (): IBestSellingCategoryRequest => {
	return { type: types.BEST_SELLING_CATEGORY_PRODUCT_REQUEST };
};

export const bestSellingCategoryErrors = (data: IError): IBestSellingCategoryError => {
	return { type: types.BEST_SELLING_CATEGORY_PRODUCT_ERROR, payload: data };
};

export const bestSellingCategoryProduct = (
	data: IProductData[]
): IBestSellingCategory => {
	return { type: types.GET_BEST_SELLING_CATEGORY_PRODUCTS, payload: data };
};


export const topSuppliersRequest = (): ITopSupplierRequest => {
	return { type: types.TOP_SUPPLIERS_PRODUCTS_REQUEST };
};

export const topSuppliersErrors = (
	data: IError
): ITopSupplierError => {
	return { type: types.TOP_SUPPLIERS_PRODUCTS_ERROR, payload: data };
};

export const topSuppliersProduct = (
	data: IProductData[]
): ITopSupplier => {
	return { type: types.GET_TOP_SUPPLIERS_PRODUCTS, payload: data };
};


/* ---------------------------------------------------------------------------------------- */

/* --------------------------------Functions---------------------- */

/* ---------- Get Products ------------------------------- */
export const getProducts =
	(options: AxiosRequestConfig<any>): any =>
	async (dispatch: AppDispatch) => {
		dispatch(productRequest());

		try {
			let res: AxiosResponse<any> = await axios.request(options);
			let finalResponse = res.data.response.product_collection;
			let newArray = finalResponse.map(
				(item: any) => {
					return {
						sku: item.sku,
						url: item.image_url,
						price: item.sale_price,
						name: item.name,
						manufacturer_name: item.manufacturer_name,
						quantity: 1,
						like: false,
					};
				}
			);
			dispatch(getProductSuccess(newArray));
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

export const getSearchedSorted =
	(data: IProductData[]): any =>
	(dispatch: AppDispatch) => {
		dispatch(searchedSorted(data));
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
				let newArray = data.map((item: any) => {
					return {
						sku: item.sku,
						url: item.image_url,
						price: item.sale_price,
						name: item.name,
						manufacturer_name: item.manufacturer_name,
						quantity: 1,
						like: false,
					};
				});
				dispatch(searchedProduct(newArray));
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
				let newArray = data.map((item: any) => {
					return {
						sku: item.sku,
						url: item.image_url,
						price: item.sale_price,
						name: item.name,
						manufacturer_name: item.manufacturer_name,
						quantity: 1,
						like: false,
					};
				});
				dispatch(bestSellingProduct(newArray));
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
				let newArray = data.map((item: any) => {
					return {
						sku: item.sku,
						url: item.image_url,
						price: item.sale_price,
						name: item.name,
						manufacturer_name: item.manufacturer_name,
						quantity: 1,
						like: false,
					};
				});
				dispatch(newArrivalProduct(newArray));
			}
		} catch (error: any) {
			dispatch(newArrivalErrors(error.message));
		}
	};

export const getSavedSearchedResult =
	(data: IProductData[]): any =>
	(dispatch: AppDispatch) => {
		dispatch(searchedProduct(data));
	};
