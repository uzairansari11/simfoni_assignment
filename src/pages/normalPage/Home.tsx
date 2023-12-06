import { useEffect } from "react";
import {
	getBestSellingProduct,
	getNewArrivalProduct,
	getProducts,
} from "../../Redux/products/action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Card from "../../components/Card";
import ErrorComponent from "../../components/ErrorComponent";
import Heading from "../../components/Heading";
import LoadingSpinner from "../../components/LoadingSpinner";
import MainCarousel from "../../components/MainCarousel";
import MultiCarousel from "../../components/MultiCarousel";
import NoDataFound from "../../components/NoDataFound";
import PeopleSearch from "../../components/PeopleSearch";
import SimpleCard from "../../components/SimpleCard";
import { images } from "../../constants/constants";
import AllItems from "../../sections/AllItems";
import { options } from "../../utils/options";
import { IProductData } from "../../utils/types";

const Home = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
		bestSelling,
		newArrival,
	} = useAppSelector((store) => store.ProductReducer);
	useEffect(() => {
		dispatch(getProducts(options("GET", "list")));
		dispatch(
			getBestSellingProduct(
				options("GET", "search", { keyword: "Best selling" })
			)
		);
		dispatch(
			getNewArrivalProduct(
				options("GET", "search", { keyword: "New Arrivals" })
			)
		);
	}, []);

	// console.log(products, " i ma from hone page");
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<>
			<div className="px-2">
				{/* Best Selling Categories */}
				<div className="bg-white rounded-lg  py-5 mt-6 mx-2">
					<Heading title="best selling categories" />
					<div className="sm:px-4 md:px-8 lg:px-10    ">
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
					{bestSelling.loading ? (
						<LoadingSpinner size={30} />
					) : bestSelling.error ? (
						<ErrorComponent message={error} />
					) : bestSelling.bestSellingData.length > 0 ? (
						<div className=" px-2 sm:px-4 md:px-8 gap-4">
							<MultiCarousel arrow={true}>
								{bestSelling.bestSellingData.map((ele: IProductData) => {
									return (
										<div className="mr-2 ml-2" key={ele.sku}>
											<Card item={ele} />
										</div>
									);
								})}
							</MultiCarousel>
						</div>
					) : (
						<NoDataFound />
					)}
				</div>
				<AllItems
					product={products.filter((_, index) => index >= 0 && index < 10)}
					loading={loading}
					error={error}
				/>
				{/* New Arrivals */}
				<div className="bg-white rounded-lg mx-2 py-5 mt-6">
					<Heading title="New Arrivals" />
					{newArrival.loading ? (
						<LoadingSpinner size={30} />
					) : newArrival.error ? (
						<ErrorComponent message={error} />
					) : newArrival.newArrivalData.length > 0 ? (
						<div className=" px-2 sm:px-4 md:px-8 gap-4">
							<MultiCarousel arrow={true}>
								{newArrival.newArrivalData.map((ele: IProductData) => {
									return (
										<div className="mr-2 ml-2" key={ele.sku}>
											<Card item={ele} />
										</div>
									);
								})}
							</MultiCarousel>
						</div>
					) : (
						<NoDataFound />
					)}
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
					<PeopleSearch />
			</div>
		</>
	);
};

export default Home;
