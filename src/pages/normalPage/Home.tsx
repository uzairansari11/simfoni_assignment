import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../Redux/products/action";

import { useAppDispatch, useAppSelector } from "../../Redux/store";
import GoTopButton from "../../components/GoTopButton";
import Heading from "../../components/Heading";
import MultiCarousel from "../../components/MultiCarousel";
import SimpleCard from "../../components/SimpleCard";
import AllItems from "../../sections/AllItems";
import { options } from "../../utils/options";
import MainCarousel from "../../components/MainCarousel";
import { images } from "../../constants/constants";

const Home = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
	} = useAppSelector((store) => store.ProductReducer);
	useEffect(() => {
		dispatch(getProducts(options("GET", "list")));
	}, []);

	// console.log(products, " i ma from hone page");
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div>
			{/* Best Selling Categories */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6 w-full ">
				<Heading title="best selling categories" />
				<div className="px-2 sm:px-4 md:px-8 lg:px-10 lg:gap-4 ">
					<MultiCarousel>
						{array.map((ele, index) => {
							return <SimpleCard key={index} />;
						})}
					</MultiCarousel>
				</div>
			</div>
			{/* ------------------------------------------------------ */}
			<div className=" w-full px-2 mt-6 h-96 ">
				<MainCarousel>
					{images.map((ele) => {
						return (
							<img
								src={ele.url}
								alt={ele.id.toString()}
								className=" w-full h-96 object-fit"
								key={ele.id}
							/>
						);
					})}
				</MainCarousel>
			</div>
			{/* Best Selling Items */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<Heading title="best selling items" />
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-24">
					{/* {array.map((ele, index) => {
						// return <Card key={index} />;
					})} */}
				</div>
			</div>
			<AllItems
				product={products.filter((_, index) => index >= 0 && index < 10)}
				loading={loading}
				error={error}
			/>
			{/* New Arrivals */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6 ">
				<div className="flex justify-between px-2 sm:px-4 md:px-8 lg:px-10 ">
					<p className="text-transform: uppercase  px-2 font-bold text-sm">
						new arrival
					</p>
					<Link
						className="text-transform: capitalize  px-2 font-bold text-sm text-teal-500"
						to={"/products/newarrivals"}
					>
						see More &gt;
					</Link>
				</div>
				<div className="px-24">
					{/* <MultiCarousel>
						{array.map((ele, index) => {
							return <Card key={index} />;
						})}
					</MultiCarousel> */}
				</div>
			</div>
			{/* Top Suppliers */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<Heading title="top suppliers" />
				<div className="px-2 sm:px-4 md:px-8 lg:px-10 lg:gap-4">
					<MultiCarousel>
						{array.map((ele, index) => {
							return <SimpleCard key={index} />;
						})}
					</MultiCarousel>
				</div>
			</div>
			<GoTopButton />
		</div>
	);
};

export default Home;
