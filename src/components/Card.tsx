import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IProductData } from "../utils/types";

const Card: React.FC<{ item: IProductData }> = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const [isChecked, setIsChecked] = useState(true);

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleAddToCart = () => {
		// Add logic to add item to cart
		// You can use quantity and perform actions accordingly
	};

	const handleHeartClick = () => {
		// Add logic to handle heart button click (like favorite, save item, etc.)
	};

	return (
		<div className="flex flex-col border-2 rounded-lg shadow-lg p-2 w-auto mx-auto my-4 ">
			<Link to={`/item/${item?.sku}`}>
				<div className="border-2 rounded-lg overflow-hidden h-32 ">
					<img
						src={item?.url}
						alt={item?.name?.substring(0, 10) || "N/A"}
						className=" h-auto m-auto object-cover"
						
					/>
				</div>
			</Link>

			<div>
				<h3 className="text-xs font-semibold  text-left mt-2 leading-tight">
					{item?.name?.substring(0, 20) ?? "N/A"}...
				</h3>
				<p className="text-gray-500 text-xs mb-2">{item?.sku}</p>
			</div>

			<p className="text-md text font-bold mb-2 ">
				$
				{
					item?.price ??
					"N/A"}
				<span className="text-xs text-slate-500 font-normal">/each</span>
			</p>

			<div>
				<p className="text-teal-500 text-xs font-semibold">
					Saving % <span className="font-normal"> 4.60</span>
				</p>
				<p className="text-gray-600 text-xs font-semibold">
					Supplier:<span className="font-normal"> Supplier</span>
				</p>
				<p className="text-gray-600 text-xs font-semibold">
					Delivery by:
					<span className="font-normal">
						{/* {item?.shipping?.messages?.[1]?.text?.split(".")[1] ??
							item?.delivery_guarantee_text?.split(".")[1] ??
							"N/A"} */}
					</span>
				</p>
			</div>

			<div className="flex flex-col sm:flex-row justify-between items-center mt-4   gap-2 lg:justify-between   ">
				<div className="hidden sm:flex md:flex lg:flex items-center  mb-2 sm:mb-0 rounded-lg max-h-10  border-2">
					<button
						className=" hover:bg-teal-500 text-gray-600 font-bold py-2 px-4 rounded"
						onClick={decrementQuantity}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						className=" hover:bg-teal-500 text-gray-600 font-bold py-2 px-4 rounded"
						onClick={incrementQuantity}
					>
						+
					</button>
				</div>

				<div className="flex sm:block md:block lg:block   items-center  gap-2 ">
					<button
						onClick={handleHeartClick}
						className=" flex justify-center items-center "
					>
						<div
							className={`h-9 w-9 hover:text-teal-700 p-1 rounded-lg flex items-center justify-center ${
								isChecked ? "bg-teal-500" : "bg-white"
							} `}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-9 w-6 "
								fill={isChecked ? "white" : "none"}
								viewBox="0 0 26 25"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
								/>
							</svg>
						</div>
					</button>

					<button
						className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1.5 px-4 rounded w-full sm:hidden md:hidden lg:hidden"
						onClick={handleAddToCart}
					>
						Add
					</button>
				</div>
			</div>

			<button
				className="hidden sm:block md:block lg:block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
				onClick={handleAddToCart}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default React.memo(Card);
