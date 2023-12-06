import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/options";

const useCurrentParamProduct = () => {
	const [currentProduct, setCurrentProduct] = useState<any>()
	const [loading, setLoading] = useState(false)
	const [error,setError]=useState<null|string>(null)
	const { id } = useParams();
	const getProductDetails = async () => {
		setLoading(true)
		try {
			const response = await axios.request(
				options("GET", "v2/detail", { sku: id})
			);
			setCurrentProduct(response.data.response.data.product);
		} catch (error:any) {
			console.error(error);
			setError(error.message)
		} finally {
			setLoading(false)
		}
	};
	useEffect(() => {
	getProductDetails()
},[ id])
	

	return {currentProduct,id,loading,error}
};

export { useCurrentParamProduct };
