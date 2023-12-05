

export interface IHeaderConfig {
  'X-RapidAPI-Key': string,
    'X-RapidAPI-Host':  string
}

export interface IOptions {
  method: string,
  url: string,
  headers:IHeaderConfig
}

export interface IProductData {
  banner_type: number;
  customer_reviews: {
    average_rating_value: number;
    rating_count: number;
  };
  display_info: {
    flashDeals: null | string;
    priceCopy: null | string;
  };
  hasReturnSale: boolean;
  inventory: {
    stockStatus: string;
  };
  is_kit: boolean;
  leadImage: {
    id: number;
  };
  manufacturer: {
    name: string;
    shortName: string;
  };
  name: string;
  options: {
    optionConnectionMetadata: any; // You might need to define the structure for this further
  };
  percent_sold: number;
  pricing: {
    customerPrice: any; // Define the structure based on pricing data
    listPrice: any; // Define the structure based on pricing data
    clearancePrice: null | any; // Define the structure based on pricing data
    suggestedRetailPrice: null | any; // Define the structure based on pricing data
  };
  promo_text: string;
  shipping: {
    messages: string[];
  };
  sku: string;
  special_sku_type: number;
  sponsoredData: null;
  three_d_info: null;
  url: string;
}
