import { useEffect, useState } from "react";
import { CiBellOn, CiHeart, CiShoppingCart, CiWallet } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navbar1 = () => {
	const [accountDropdown, setAccountDropdown] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<div className="flex flex-row bg-white md:flex-row justify-between items-center py-1 px-4">
			{/* Logo */}
			<div
				className="flex items-center mb-4 md:mb-0 cursor-pointer px-3"
				onClick={() => navigate("/")}
			>
				<div>{<GiHamburgerMenu />}</div>
				<img
					src="https://www.google.com/s2/favicons?domain=simfoni.com&sz=128"
					alt="Logo"
					className="w-8 h-8 ml-4"
				/>
			</div>

			{/* Navigation Buttons */}
			<div className="hidden md:flex text-gray-800 font-semibold text-sm flex-col md:flex-row md:space-x-4   lg:space-x-8 ">
				<button>Catalog</button>
				<button>BuyDesk</button>
				<button className="flex items-center">
					History{" "}
					<span>
						<IoMdArrowDropdown />
					</span>
				</button>
				<button>Dashboard</button>
			</div>

			<div className="hidden md:flex  items-center mb-4 md:mb-0 gap-x-5  ml-2 mr-2">
				<div className="relative flex items-center">
					<button className=" relative flex items-center py-1 px-4  rounded-l-md focus:outline-none border">
						<span className="block">PO</span>
						<span className="absolute inset-y-0 right-0 flex items-center ">
							<IoMdArrowDropdown />
						</span>
					</button>

					<input
						type="text"
						placeholder="Search"
						className="py-1 px-4 w-full focus:outline-none bg-white font-semibold border"
					/>

					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-4.35-4.35M15 10a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z"
							></path>
						</svg>
					</div>
				</div>

				<button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded">
					Help
				</button>
			</div>

			<div className="flex space-x-4">
				<button>
					<CiWallet />{" "}
				</button>
				<button>
					<CiHeart />{" "}
				</button>
				<button>
					<CiShoppingCart />{" "}
				</button>
				<button>
					<CiBellOn />{" "}
				</button>
			</div>

			<div className="flex items-center space-x-2">
				<div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
					<img
						src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1701813585~exp=1701814185~hmac=1be2f2109c3fd1119ff65ed3615cfe03820efc76ac6c1b1b32f96a6862f84cef"
						alt="Avatar"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="md:flex flex-col hidden">
					<button
						onClick={() => setAccountDropdown(!accountDropdown)}
						className="text-gray-800 font-semibold focus:outline-none"
					>
						Uzair Ansari
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar1;
