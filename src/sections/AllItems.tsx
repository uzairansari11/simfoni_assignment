import { Link } from "react-router-dom";
import Card from "../components/Card";
import { IProductData } from "../utils/types";

const AllItems: React.FC<{ product: IProductData[] }> = ({ product }) => {
	console.log(product, "from all");
	return (
		<div className="bg-white rounded-lg mx-2 py-5 mt-6">
			<div className="flex justify-between px-24 ">
				<p className="text-transform: uppercase  px-2 font-bold text-sm">
					all items
				</p>
				<Link
					className="text-transform: capitalize  px-2 font-bold text-sm text-teal-500"
					to={"/products/allitems"}
				>
					see More &gt;
				</Link>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-5 gap-4 px-24">
				{product.length > 0 &&
					product.map((ele: IProductData) => {
						return <Card key={ele.sku} item={ele} />;
					})}
			</div>
		</div>
	);
};

export default AllItems;
