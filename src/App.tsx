import Routings from "./Routings/Routings";
import BottomCategory from "./components/BottomCategory";
import Footer  from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";

function App() {
	return (
		<div className="bg-slate-100">
			<Navbar1 />
			<Navbar />
			<BottomCategory />
			<Routings />
			<Footer />
		</div>
	);
}

export default App;
