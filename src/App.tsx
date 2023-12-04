import Routings from "./Routings/Routings";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";

function App() {
	return (
		<div className="bg-slate-100">
			<SearchBar />
			{/* <Navbar /> */}
			<Routings />
		</div>
	);
}

export default App;
