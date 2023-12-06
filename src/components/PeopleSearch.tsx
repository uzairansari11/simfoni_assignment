import { PEOPLE_SEARCHED_DATA } from "../constants/constants";

const PeopleSearch = () => {
	

	return (
		<div className="bg-white  mx-2 my-4 px-4  py-4 rounded-lg ">
			<h2 className="text-md font-semibold mb-4 uppercase">
				People Searching for
			</h2>
			<div className="flex flex-wrap gap-2">
				{PEOPLE_SEARCHED_DATA.map((item, index) => (
					<div
						key={index}
						className="bg-teal-50 border-2 border-teal-100 text-gray-600 px-2 py-1 rounded-md
						
						text-sm
						"
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default PeopleSearch;
