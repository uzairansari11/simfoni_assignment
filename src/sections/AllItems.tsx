import Card from "../components/Card";

const AllItems = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div className="bg-white rounded-lg mx-2 py-5 mt-6">
			<div className="flex justify-between px-24 ">
				<p className="text-transform: uppercase  px-2 font-bold text-sm">
					all items
				</p>
				<button className="text-transform: capitalize  px-2 font-bold text-sm text-teal-500">
					see More &gt;
				</button>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-24">
				{array.map((ele, index) => {
					return <Card key={index} />;
				})}
			</div>
		</div>
	);
};

export default AllItems;
