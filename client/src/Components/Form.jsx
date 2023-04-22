import React, { useEffect } from "react";
import Checkbox from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
	updateName,
	updatePhone,
	updateServices,
	submitFormInput,
	clearError,
} from "../store/form/formInputSlice";
import useToaster from "../hooks/useToaster";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
	const state = useSelector((s) => s.formInput);
	const errorMessages = useSelector((s) => s.formInput.errorMessages);
	const dispatch = useDispatch();
	const toast = useToaster();

	if (errorMessages.length >= 0) {
		for (let m of errorMessages) {
			toast.toastFailure(m);
		}
		dispatch(clearError());
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(submitFormInput());
	}

	function handleNameChange(e) {
		dispatch(updateName(e.target.value));
	}

	function handlePhoneChange(e) {
		dispatch(updatePhone(e.target.value));
	}

	function handleToggleCheckboxChange(id, checked) {
		dispatch(updateServices({ id: id, checked: checked }));
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
						value={state.name}
						onChange={handleNameChange}
						placeholder="Your name"
					/>
				</div>
				<div>
					<input
						className="rounded-md pl-3 py-1"
						type="text"
						required
						value={state.phone}
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
					{state.services.map((s) => {
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
		</form>
	);
};

export default Form;
