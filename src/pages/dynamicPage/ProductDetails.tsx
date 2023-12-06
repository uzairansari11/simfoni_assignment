import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useCurrentParamProduct } from "../../hook/useCurrentParamProduct";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorComponent from "../../components/ErrorComponent";
const ProductDetails: React.FC = () => {
	const { currentProduct, id, loading, error } = useCurrentParamProduct();
	console.log(currentProduct, "from single");
	const smallImages: string[] = [
		"https://via.placeholder.com/500",
		"https://via.placeholder.com/600",
		"https://via.placeholder.com/100",
	];

	const [selectedImage, setSelectedImage] = useState<string>(smallImages[0]);
	const [additionalInfoOpen, setAdditionalInfoOpen] = useState<boolean>(true);
	const [longDescriptionOpen, setLongDescriptionOpen] = useState<boolean>(true);
	const [quantity, setQuantity] = useState<number>(1);
	const [isChecked, setIsChecked] = useState<boolean>(true);
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{loading ? (
				<LoadingSpinner height={"screen"} />
			) : error ? (
				<ErrorComponent message={error} />
			) : (
				<div className="container mx-auto p-8">
					<div className="flex">
						<div className="w-1/2 flex">
							<div className="flex flex-col mr-8 w-20 justify-start items-center">
								{smallImages.map((img, index) => (
									<div className="w-20  self-center justify-center mb-2">
										<img
											key={index}
											src={img}
											alt={`Product Thumbnail ${index}`}
											className={`cursor-pointer  rounded-md ${
												img === selectedImage
													? "border-2 border-teal-500"
													: "border-none"
											}`}
											onClick={() => setSelectedImage(img)}
										/>
									</div>
								))}
							</div>
							<div className="border-2 rounded-md overflow-hidden mr-8 w-80 h-80 flex items-center justify-center">
								<img
									src={selectedImage}
									alt="Selected Product"
									className="max-w-full max-h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col w-1/2">
							<h1 className="text-xl font-semibold mb-2 ">
								{currentProduct?.manufacturer.name || "N/A"}
							</h1>
							<p className="text-gray-400  text-md mb-2 ">
								SKU Number {id || "N/A"}
							</p>
							<p className=" text-md font-semibold mb-2 ">
								{currentProduct?.manufacturer.name || "N/A"}
							</p>
							<p className="text-md font-bold mb-4">
								Price:{" "}
								<span className="text-xl font-bold">
									${currentProduct?.pricing.customerPrice.unitPrice.value}
								</span>{" "}
								<span className="text-gray-400 font-normal">/each</span>
							</p>

							{/* Buttons section */}
							<div className="flex flex-col sm:flex-row justify-center items-center   gap-x-4 w-80 mb-10">
								{/* Quantity controls */}

								<div className="flex items-center space-x-1 mb-2 sm:mb-0 border-2 rounded-lg max-h-10 ">
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

								{/* Add to Cart button */}
								<button
									className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-1 rounded  w-full"
									// onClick={handleAddToCart}
								>
									Add to Cart
								</button>
								{/* Heart button */}
								<button
									// onClick={handleHeartClick}
									className=" flex justify-center items-center"
								>
									<div
										className={`h-10 w-10 text-teal-500 hover:text-teal-700 border-2 border-teal-500 p-1 rounded-lg flex items-center justify-center ${
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

							<div className="mb-4 border-b-2 pb-4">
								<div
									className="flex justify-between cursor-pointer  items-center"
									onClick={() => setAdditionalInfoOpen(!additionalInfoOpen)}
								>
									<p className="flex items-center focus:outline-none text-transform: uppercase font-semibold">
										Additional Information
									</p>
									<span>{additionalInfoOpen ? <FiMinus /> : <FaPlus />}</span>
								</div>
								{additionalInfoOpen && (
									<div className=" mt-2 text-gray-700">
										<p className="font-semibold">
											Vendor Name:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												{currentProduct?.manufacturer.name || "N/A"}
											</span>
										</p>
										<p className="font-semibold">
											Manufacturer Name:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												{currentProduct?.manufacturer.name || "N/A"}
											</span>
										</p>
										<p className="font-semibold">
											Brand Name:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												{"N/A"}
											</span>
										</p>
										<p className="font-semibold">
											Days of Delivery:
											<span className="font-normal text-sm text-gray-400 ">
												{/* {currentProduct?.shipping.messages[0]?.text.toString()} */}
												{"N/A"}
											</span>
										</p>
										<p className="font-semibold">
											Country of Origin:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												USA
											</span>
										</p>
										<p className="font-semibold">
											Product Specification:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												{"--"}
											</span>
										</p>
										<p className="font-semibold">
											Pack Size:{" "}
											<span className="font-normal text-sm text-gray-400 ">
												{"N/A"}
											</span>
										</p>
									</div>
								)}
							</div>
							<div className="mb-4  border-b-2 pb-4">
								<div
									className="flex justify-between cursor-pointer  items-center"
									onClick={() => setLongDescriptionOpen(!longDescriptionOpen)}
								>
									<p className="flex items-center focus:outline-none text-transform: uppercase font-semibold ">
										Long Description
									</p>
									<span>{longDescriptionOpen ? <FiMinus /> : <FaPlus />}</span>
								</div>
								{longDescriptionOpen && (
									<div className=" mt-2 text-gray-400">
										<p>{currentProduct?.manufacturer.details}</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default React.memo(ProductDetails);
