import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/dynamicPage/ProductDetails";
import Home from "../pages/normalPage/Home";
import Products from "../pages/normalPage/Products";

const Routings = () => {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="item/:id" Component={ProductDetails} />
			<Route path="products/:id" Component={Products} />
		</Routes>
	);
};

export default Routings;
