import React, { useReducer } from "react";
import Checkbox from "./Checkbox";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const serviceTemplate = [
	"Acrylic set",
	"Acrylic fill",
	"Dip powder",
	"Pedicure",
	"Shellac Manicure",
];

let id = 0;

const servicesData = serviceTemplate.map((s) => {
	return {
		id: id++,
		name: s,
		checked: false,
	};
});

const nameRegEx = /^[A-Za-z]+$/;
const phoneRegEx = /^[0-9]{10}$/;

const initialState = {
	name: "",
	phone: "",
	services: servicesData,
	errors: [],
};

const formInputReducer = (state, action) => {
	switch (action.type) {
		case "name_change": {
			const value = action.event.target.value;
			return {
				...state,
				name: value,
				errors: [],
			};
		}
		case "set_error": {
			return {
				...state,
				errors: action.error,
			};
		}
		case "phone_change": {
			const value = action.event.target.value;
			return {
				...state,
				phone: value,
				errors: [],
			};
		}
		case "service_change": {
			const services = state.services.map((s) => {
				if (s.id === action.serviceId) {
					return {
						...s,
						checked: action.checked,
					};
				} else {
					return s;
				}
			});
			return { ...state, services: services, errors: [] };
		}
		case "submit": {
			console.log("submit");
			const s = { ...state };
			const isNameValid = nameRegEx.test(state.name);
			const isPhoneValid = phoneRegEx.test(state.phone);
			const noServiceSelected = state.services.every(
				(x) => x.checked === false
			);
			if (noServiceSelected) s.errors.push("Please select at least 1 service");
			if (!isNameValid)
				s.errors.push("Your name may contain only alphabet characters");
			if (!isPhoneValid)
				s.errors.push("Your phone number may contain only 10 digits");
			if (s.errors.length === 0) {
				toast(`Thank you ${s.name} ❤️!`);
				console.log(s)
				return { ...initialState };
			} else {
				s.errors.forEach((error) => {
					toast(error);
				});
				return s;
			}
		}
		default: {
		}
	}
};

const Form = () => {
	const [input, dispatchInput] = useReducer(formInputReducer, initialState);

	function handleSubmit(e) {
		e.preventDefault();
		dispatchInput({ type: "submit" });
	}

	function handleNameChange(e) {
		dispatchInput({ type: "name_change", event: e });
	}

	function handlePhoneChange(e) {
		dispatchInput({ type: "phone_change", event: e });
	}

	function handleToggleCheckboxChange(id, checked) {
		dispatchInput({ type: "service_change", serviceId: id, checked: checked });
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
				<h3>Your Information:</h3>
				<div>
					<input
						className="rounded-md pl-3 py-1"
						required
						type="text"
						value={input.name}
						onChange={handleNameChange}
						placeholder="Your name"
					/>
				</div>
				<div>
					<input
						className="rounded-md pl-3 py-1"
						type="text"
						required
						value={input.phone}
						onChange={handlePhoneChange}
						placeholder="Phone number"
					/>
				</div>
			</div>
			<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
				<div className="flex-none w-30 mr-10">
					Please choose your sevice(s):
				</div>
				<div className="flex-1 flex gap-5 flex-wrap">
					{input.services.map((s) => {
						return (
							<Checkbox
								key={s.id}
								id={s.id}
								label={s.name}
								checked={s.checked}
								onToggleCheckboxChange={handleToggleCheckboxChange}
							/>
						);
					})}
				</div>
			</div>
			<div className="flex">
				<input
					className="cursor-pointer h-8 w-20 rounded-md mt-8 mx-auto bg-blue-400 text-blue font-bold"
					type="submit"
					value="Submit"
				></input>
			</div>

			<ToastContainer />
		</form>
	);
};

export default Form;
