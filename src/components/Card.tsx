import React, { useState } from "react";

const Card: React.FC = () => {
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
		<div className="flex flex-col border-2 rounded-lg shadow-lg p-2 w-48 mx-auto my-4 ">
			{/* image section  */}
			<div className="border-2 rounded-lg overflow-hidden  ">
				<img
					src="https://m.media-amazon.com/images/I/514tViQ5g+L.jpg"
					alt="Robhinsons"
					className="w-20 py-6 h-auto m-auto  "
				/>
			</div>
			{/* title and serial number */}
			<div>
				<h3 className="text-md font-semibold  text-left mt-2 leading-tight">
					Robhinsons Summer Fruit No Added Sugar 1 Liter
				</h3>
				<p className="text-gray-500 text-sm mb-2">906119043</p>
			</div>
			{/* price section */}
			<>
				<p className="text-xl text font-bold mb-2 ">
					$0.83{"  "}
					<span className="text-xs text-slate-500 font-normal">/each</span>
				</p>
			</>
			{/* other details section */}
			<div>
				<p className="text-teal-500 text-sm font-semibold">
					Saving % <span className="font-normal"> 4.60</span>
				</p>
				<p className="text-gray-600 text-sm font-semibold">
					Supplier:<span className="font-normal"> Supplier</span>
				</p>
				<p className="text-gray-600 text-sm font-semibold">
					Delivery by:<span className="font-normal"> 24-Jan-2022</span>
				</p>
			</div>
			{/* Buttons section */}
			<div className="flex flex-col sm:flex-row justify-between items-center mt-4 ">
				{/* Quantity controls */}
				<div className="flex items-center space-x-4 mb-2 sm:mb-0 border-2 rounded-lg max-h-10 ">
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
				{/* Heart button */}
				<button
					onClick={handleHeartClick}
					className=" flex justify-center items-center"
				>
					<div
						className={`h-9 w-9 text-teal-500 hover:text-teal-700 border-2 border-teal-500 p-1 rounded-lg flex items-center justify-center ${
							isChecked ? "bg-teal-500" : "bg-white"
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-9 w-6
              "
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
			</div>

			{/* Add to Cart button */}
			<button
				className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
				onClick={handleAddToCart}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Card;
