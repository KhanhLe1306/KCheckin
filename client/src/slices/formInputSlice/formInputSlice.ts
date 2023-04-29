import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";
import { FormInputState, ServicePayload } from "./interfaces";
import { toast } from "react-toastify";
import axios from "axios";


const nameRegEx = /^[A-Z][a-z]+([\s-][A-Z][a-z]+)*$/;
const phoneRegEx = /^[0-9]{10}$/;


export const fetchServices = createAsyncThunk(
	"FormInput/fetchServices",
	async () => {
		const response = await axios.get("https://localhost:7097/api/nailservice");
		console.log(response);
		return response.data;
	}
);

const formInputSlice = createSlice({
	name: "FormInput",
	initialState: {
		name: "",
		phone: "",
		services: [],
	} as FormInputState,
	reducers: {
		updateName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		updatePhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		updateServices: (state, action: PayloadAction<ServicePayload>) => {
			const services = state.services.map((s) => {
				if (s.id === action.payload.id) {
					return {
						...s,
						checked: action.payload.checked,
					};
				} else {
					return s;
				}
			});
			state.services = services;
		},
		submitFormInput: (state) => {
			const isNameValid = nameRegEx.test(state.name);
			const isPhoneValid = phoneRegEx.test(state.phone);
			if (!isNameValid)
				toast.error("Your name may contain only alphabet characters");
			if (!isPhoneValid)
				toast.error("Your phone number may contain only 10 digits");
			const noServiceSelected = state.services.every(
				(x) => x.checked === false
			);
			if (noServiceSelected) toast.error("Please select at least 1 service");
			if (isNameValid && isPhoneValid && !noServiceSelected) {
				console.log("Submitting!!!!");
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchServices.fulfilled, (state, action) => {
			console.log("here");
			console.log(action.payload);
			state.services = action.payload;
		});
	},
});

export const { updateName, updatePhone, updateServices, submitFormInput } =
	formInputSlice.actions;

export default formInputSlice.reducer;
