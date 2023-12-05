import { AxiosRequestConfig } from "axios";
import { AppDispatch } from "../store";
import { getProductsAPI } from "./api";
import * as types from "./type";
import { IProductData } from "../../utils/types";

export interface IProductRequest {
	type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
	type: typeof types.PRODUCT_ERROR;
}

export interface IGetProductSuccess {
	type: typeof types.GET_PRODUCTS_SUCCESS;
	payload: IProductData[];
}

export type AppAction = IProductRequest | IProductError | IGetProductSuccess;

//action creators
const productRequest = (): IProductRequest => {
	return { type: types.PRODUCT_REQUEST };
};

const productError = (): IProductError => {
	return { type: types.PRODUCT_ERROR };
};

const getProductSuccess = (data: IProductData[]): IGetProductSuccess => {
	return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};

export const getProducts =
	(
		options:AxiosRequestConfig<any>,
		// getProductsParam?: { params: { category: string[] } }
	): any =>
	async (dispatch: AppDispatch) => {
		dispatch(productRequest());

		try {
      let data = await getProductsAPI(options);
     
			if (data) {
				dispatch(getProductSuccess(data));
			}
		} catch (e) {
			dispatch(productError());
		}
	};
