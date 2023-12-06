import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../constants/constants";

const CategoryNav = () => {
	const [activeMenu, setActiveMenu] = useState<number | null>(null);

	const handleDropdownClick = (index: number) => {
		setActiveMenu(activeMenu === index ? null : index);
	};

	return (
		<div className="hidden md:flex bg-white mx-4 rounded-md mt-4 py-1">
			{categories.map((category, index) => (
				<div key={index} className="dropdown inline-block relative">
					<button
						className="font-semibold py-1 px-2 rounded inline-flex items-center space-x-1 text-xs sm:text-sm focus:outline-none"
						onClick={() => handleDropdownClick(index)}
					>
						<span>{category.title}</span>
						{category.subcategories.length > 0 && (
							<FaAngleDown
								className={`text-xs ${
									activeMenu === index ? "transform rotate-180" : ""
								}`}
							/>
						)}
					</button>
					{category.subcategories.length > 0 && activeMenu === index && (
						<ul className="dropdown-content z-30 absolute text-gray-700 pt-1 ml-4 w-72 rounded-md bg-white shadow-lg">
							{category.subcategories.map((subcategory, subIndex) => (
								<li key={subIndex}>
									<Link
										className="block py-2 px-4 hover:text-blue-600 whitespace-no-wrap text-xs sm:text-sm"
										to="#"
									>
										{subcategory}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
};

export default CategoryNav;
