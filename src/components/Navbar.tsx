import SearchBar from "./Searchbar";

const Navbar = () => {
	return (
		<div className=" flex justify-between gap-x-10  py-2 items-center px-4 mt-4">
			<div className="w-4/5 ">
				<SearchBar />
			</div>
			<div className="w-1/5">
				<button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded">
					Upload
				</button>
			</div>
			<div className="w-3/5 flex justify-between gap-x-10">
				<select className="w-1/2 p-1 rounded-md border-2focus:border-teal-500 justify-between ">
					<option disabled selected>
						Filter
					</option>
					<option>Hello</option>
					<option>Hello</option>
				</select>
				<select className="w-1/2 p-1 rounded-md border-2 border-teal-500 focus:border-teal-500 ">
					<option disabled selected>
						Sort by
					</option>
					<option>Hello</option>
					<option>Hello</option>
				</select>
			</div>
		</div>
	);
};

export default Navbar;
