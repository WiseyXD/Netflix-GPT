import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Gpt from "./Pages/Gpt";
import Browse from "./Pages/Browse";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/browse" element={<Browse />} />
				<Route path="/gpt" element={<Gpt />} />
			</Routes>
		</div>
	);
}

export default App;
