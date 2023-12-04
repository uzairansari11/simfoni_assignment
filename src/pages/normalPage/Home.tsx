import Card from "../../components/Card";
import GoTopButton from "../../components/GoTopButton";
import MultiCarousel from "../../components/MultiCarousel";
import SimpleCard from "../../components/SimpleCard";
import AllItems from "../../sections/AllItems";

const Home = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div>
			{/* Best Selling Categories */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<p className="text-transform: uppercase  px-24 mb-4 font-bold text-sm">
					best selling categories
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-24">
					{array.map((ele, index) => {
						return <SimpleCard key={index} />;
					})}
				</div>
			</div>
			{/* ------------------------------------------------------ */}

			{/* Best Selling Items */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<p className="text-transform: uppercase px-24 font-bold text-sm">
					best selling items
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-24">
					{array.map((ele, index) => {
						return <Card key={index} />;
					})}
				</div>
			</div>
			<AllItems />
			{/* New Arrivals */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6 ">
				<p className="text-transform: uppercase  px-24 font-bold text-sm">
					new arrivals
				</p>
				<div className="px-24">
					<MultiCarousel>
						{array.map((ele, index) => {
							return <Card key={index} />;
						})}
					</MultiCarousel>
				</div>
			</div>
			{/* Top Suppliers */}
			<div className="bg-white rounded-lg mx-2 py-5 mt-6">
				<p className="text-transform: uppercase  px-24 font-bold text-sm mb-4">
					top suppliers
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-24">
					{array.map((ele, index) => {
						return <SimpleCard key={index} />;
					})}
				</div>
			</div>
			<GoTopButton />
		</div>
	);
};

export default Home;
