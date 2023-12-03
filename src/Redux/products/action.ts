import { PRODUCT_ERROR, PRODUCT_REQUEST } from "./type";

/* Interfaces */
export interface IProductRequest {
	type: typeof PRODUCT_REQUEST;
}

export interface IProductError {
	type: typeof PRODUCT_ERROR;
}
/* ---------------------------- */

/* Action Creators */
export const loadingActionCreator: () => IProductRequest = () => {
	return { type: PRODUCT_REQUEST };
};

export const errorActionCreator: () => IProductError = () => {
	return { type: PRODUCT_ERROR };
};

// export const successActionCreator = (payload) => {
//   return {type : GET_PRODUCTS_SUCCESS , payload}
// }

/* ----------------------------- */