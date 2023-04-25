import { configureStore } from "@reduxjs/toolkit";

import formInputReducer from "./formInputSlice/formInputSlice";

const store = configureStore({
	reducer: {
		formInput: formInputReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
