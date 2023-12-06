import { headersConfig } from "../constants/constants";

export const options = (method: string, endpoint: string,params?:object|Array<object>) => {
	return {
		method: `${method}`,
		url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
		headers: headersConfig,
		params:params
	};
};