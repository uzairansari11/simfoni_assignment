
import { IProductData } from "../../utils/types";
import { AppAction } from "./action";
import * as types from "./type";

export interface IAppState {
	loading: boolean;
	error: boolean;
	data: IProductData[];
}

const initialState:IAppState = {
	loading: false,
	error: false,
	data: [],
};

export const ProductReducer = (
	oldState: IAppState = initialState,
	action: AppAction
): IAppState => {
	const { type } = action;
	switch (type) {
		case types.PRODUCT_REQUEST:
			return { ...oldState, loading: true };
		case types.PRODUCT_ERROR:
			return { ...oldState, loading: false, error: true };
		case types.GET_PRODUCTS_SUCCESS:
			return { ...oldState, loading: false, data: action.payload };
		

		default:
			return oldState;
	}
};


