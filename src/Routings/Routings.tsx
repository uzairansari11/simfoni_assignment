import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/dynamicPage/ProductDetails";
import Home from "../pages/normalPage/Home";

const Routings = () => {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="product/:id" Component={ProductDetails} />
		</Routes>
	);
};

export default Routings;
