import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Gpt from "./Components/Gpt";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/gpt" element={<Gpt />} />
			</Routes>
		</div>
	);
}

export default App;
