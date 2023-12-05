import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { headersConfig } from "../../constants/constants";
import { IProductData } from "../../utils/types";

export const options = (method: string, endpoint: string) => {
	return {
		method: `${method}`,
		url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
		headers: headersConfig,
	};
};

interface ApiResponse {
  response: {
    data: {
      category: {
        browse: {
          products: IProductData[]; 
        };
      };
    };
  };
}

export const getProductsAPI = async (options: AxiosRequestConfig<any>) => {
  try {
    let res: AxiosResponse<ApiResponse> = await axios.request(options);
    let finalResponse = res.data.response.data.category.browse.products;
    return finalResponse;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
};

