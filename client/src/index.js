import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./Context/AuthContextProvider";
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { staleTime: 1000 * 60 * 5 },
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	//<React.StrictMode>
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
		<ToastContainer />
	</Provider>
	//</React.StrictMode>
);
