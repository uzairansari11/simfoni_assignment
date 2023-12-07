export interface IHeaderConfig {
	"X-RapidAPI-Key": string;
	"X-RapidAPI-Host": string;
}

export interface IOptions {
	method: string;
	url: string;
	headers: IHeaderConfig;
	params?: object | Array<object>;
}

export interface IProductData {
	sku: string;
	url?: string;
	price: number;
	name: string;
	manufacturer_name: string;
	quantity: number;
	like: boolean;
	vendor_name?: string;
	brand_name?: string;
	delivery?: string;
	origin?: string;
	specification?: [];
	size?: [];
	description?: string;
}

export type ILoading = boolean;
export type IError = string | boolean;


export interface InterfaceBestSellingCategory {
	categoryId: number;
	displayName: string;
	ireId: number;
	isCategoryPage: boolean;
}