import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormInputState, ServicePayload } from "./interfaces";

let id = 0;

const nameRegEx = /^[A-Za-z]+$/;
const phoneRegEx = /^[0-9]{10}$/;

const serviceTemplate = [
	"Acrylic set",
	"Acrylic fill",
	"Dip powder",
	"Pedicure",
	"Shellac Manicure",
];

const servicesData = serviceTemplate.map((s) => {
	return {
		id: id++,
		name: s,
		checked: false,
	};
});

const formInputSlice = createSlice({
	name: "FormInput",
	initialState: {
		name: "",
		phone: "",
		services: servicesData,
		errorMessages: [] as string[]
	} as FormInputState,
	reducers: {
		updateName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		updatePhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		updateServices: (state, action: PayloadAction<ServicePayload>) => {
			const services = servicesData.map((s) => {
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
			const noServiceSelected = state.services.every(
				(x) => x.checked === false
			);
			if (noServiceSelected) state.errorMessages.push("Please select at least 1 service");
			if (!isNameValid)
				state.errorMessages.push("Your name may contain only alphabet characters");
			if (!isPhoneValid)
				state.errorMessages.push("Your phone number may contain only 10 digits");
			if (state.errorMessages.length !== 0) {
				// Submit api
                console.log("Success!!!!!")
			} 
        },
        clearError: state => {
            state.errorMessages = [] as string[]
        },
	},
});

export const { updateName, updatePhone, updateServices, submitFormInput, clearError } = formInputSlice.actions;

export default formInputSlice.reducer
