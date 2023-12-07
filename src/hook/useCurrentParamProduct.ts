import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/options";



const useCurrentParamProduct = () => {
	const [currentProduct, setCurrentProduct] = useState<any>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false); // Modify this based on your IError definition
	const { id } = useParams(); // Define the type explicitly

	const getProductDetails = async () => {
		setLoading(true);
		try {
			const response: AxiosResponse<any> = await axios.request(
				options("GET", "v2/detail", { sku: id })
			);
			const ele = response.data.response.data.product;
			console.log(ele," i am ele")
			const newObj = {
				sku: id,
				price: ele.pricing.customerPrice.unitPrice.value,
				name: ele.manufacturer.name,
				description: ele.manufacturer.details,
				quantity: ele.faqs.qaItems.totalCount,
				like: false,
				size: ele.display_info.measurements[0].tags,
			};
			setCurrentProduct(newObj);
		} catch (error: any) {
			setError(error?.message); // Adjust the structure according to IError
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProductDetails();
	}, [id]);

	return { currentProduct, loading, error };
};

export { useCurrentParamProduct };

