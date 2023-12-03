import Card from "../../components/Card";

const Home = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-28">
			{array.map((ele, index) => {
				return <Card key={index} />;
			})}
		</div>
	);
};

export default Home;
