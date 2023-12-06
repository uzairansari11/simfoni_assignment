import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse, IProductData } from "../../utils/types";
import { AppDispatch } from "../store";
import * as types from "./type";
export interface IProductRequest {
	type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
	type: typeof types.PRODUCT_ERROR;
	payload: string;
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
	type:typeof types.SEARCHED_QUERY_REQUEST
}

export interface ISearchedQueryError{
	type: typeof types.SEARCHED_QUERY_ERROR,
	payload : string | boolean
}

export type AppAction = IProductRequest | IProductError | IGetProductSuccess|IProductSorted|IProductSearched|ISearchedQueryRequests|ISearchedQueryError

//action creators
const productRequest = (): IProductRequest => {
	return { type: types.PRODUCT_REQUEST };
};

const productError = (payload: string): IProductError => {
	return { type: types.PRODUCT_ERROR, payload };
};

const getProductSuccess = (data: IProductData[]): IGetProductSuccess => {
	return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};

 const productSorted = (data:IProductData[]):IProductSorted => {
	return {type:types.PRODUCTS_SORT,payload:data}
}



 const searchedQueryRequest = (): ISearchedQueryRequests => {
	return { type: types.SEARCHED_QUERY_REQUEST };
};

const searchedQueryErrors = (data:string|boolean): ISearchedQueryError => {
	return {type :types.SEARCHED_QUERY_ERROR,payload:data}
}

export const searchedProduct = (data:any[]) :IProductSearched=> {
	return {type:types.GET_SEARCHED_PRODUCTS,payload:data}
}


export const getProducts =(options: AxiosRequestConfig<any>): any =>async (dispatch: AppDispatch) => {	dispatch(productRequest());

		try {
			let res: AxiosResponse<ApiResponse> = await axios.request(options);
			let finalResponse = res.data.response.data.category.browse.products;
			dispatch(getProductSuccess(finalResponse));
		} catch (error: any) {
			dispatch(productError(error.message));
		}
	};


export const getProductSorted = (data:IProductData[]):any=>(dispatch:AppDispatch) => {
	dispatch(productSorted(data))
}


export const getSearchedProduct = (options:AxiosRequestConfig<any>): any => async(dispatch: AppDispatch) => {
	dispatch(searchedQueryRequest())
		try {
			const response = await axios.request(options);
			const data = response.data.response.product_collection;
			if (data.length) {
				dispatch(searchedProduct(data));
			}
		} catch (error:any) {
		dispatch(searchedQueryErrors(error.message));
		}
	};
	









