import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseProvider } from "./Context/firebase.jsx";
import { Provider } from "react-redux";
import store from "./Context/store.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<FirebaseProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FirebaseProvider>
		</Provider>
	</React.StrictMode>
);
