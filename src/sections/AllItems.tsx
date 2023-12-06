import { Link } from "react-router-dom";
import Card from "../components/Card";
import { IError, ILoading, IProductData } from "../utils/types";
import { ALL_ITEMS } from "../constants/constants";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorComponent from "../components/ErrorComponent";

const AllItems: React.FC<{
	product: IProductData[];
	loading: ILoading;
	error: IError;
}> = ({ product, loading, error }) => {
	return (
		<div className="bg-white rounded-lg mx-2 py-5 mt-6">
			<div className="flex justify-between px-2 sm:px-4 md:px-8 lg:px-10 ">
				<p className="text-transform: uppercase  px-2 font-bold text-sm">
					all items
				</p>
				<Link
					className="text-transform: capitalize  px-2 font-bold text-sm text-teal-500"
					to={`/products/${ALL_ITEMS}`}
				>
					see More &gt;
				</Link>
			</div>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<ErrorComponent message={error} />
			) : product.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-5 gap-4 px-2 sm:px-4 md:px-8 lg:px-10 lg:gap-4">
					{product.map((ele: IProductData) => {
						return <Card key={ele.sku} item={ele} />;
					})}
				</div>
			) : (
				<p>No data found</p>
			)}
		</div>
	);
};

export default AllItems;
