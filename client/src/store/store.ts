import { configureStore } from "@reduxjs/toolkit";

import formInputReducer, { fetchServices } from "../slices/formInputSlice/formInputSlice";

const store = configureStore({
	reducer: {
		formInput: formInputReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(fetchServices());

export default store;
