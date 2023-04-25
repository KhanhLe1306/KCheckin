import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./Context/AuthContextProvider";
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	//<React.StrictMode>
	<Provider store={store}>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>

		<ToastContainer />
	</Provider>
	//</React.StrictMode>
);
