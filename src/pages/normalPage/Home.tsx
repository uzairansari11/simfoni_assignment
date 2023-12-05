import { Link } from "react-router-dom";
import Card from "../../components/Card";
import GoTopButton from "../../components/GoTopButton";
import Heading from "../../components/Heading";
import MultiCarousel from "../../components/MultiCarousel";
import SimpleCard from "../../components/SimpleCard";
import AllItems from "../../sections/AllItems";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { useEffect } from "react";
import { getProducts } from "../../Redux/products/action";
import { options } from "../../Redux/products/api";

const Home = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((store) => store.ProductReducer.data);
	useEffect(() => {
		dispatch(getProducts(options("GET", "list")));
	}, []);

	// console.log(products, " i ma from hone page");
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div>
			{/* Best Selling Categories */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<Heading title="best selling categories" />

				<div className="px-24">
					<MultiCarousel>
						{array.map((ele, index) => {
							return <SimpleCard key={index} />;
						})}
					</MultiCarousel>
				</div>
			</div>
			{/* ------------------------------------------------------ */}

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
				product={products.filter((ele, index) => index >= 0 && index < 10)}
			/>
			{/* New Arrivals */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6 ">
				<div className="flex justify-between px-24 ">
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
				<div className="px-24">
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
