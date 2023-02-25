import React, { useEffect, useState } from "react";
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

const Form = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [services, setServices] = useState([]);
	const [validInputs, setValidInputs] = useState(false);
	const [error, setError] = useState("");
	const [checkBoxError, setCheckBoxError] = useState("");

	//let disabledButton = true;

	useEffect(() => {
		setServices(servicesData);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		if (!validInputs) {
			setError(
				"Yourname may contain only letters and your phone number may contain only 10 digits"
			);
		} else if (services.every((temp) => temp.checked === false)) {
			setCheckBoxError("Please choose at least 1 service!");
		} else {
			setError("");
			setCheckBoxError("");
			setName("");
			setPhone("");
			setServices([...servicesData]);
			toast(`Thank you ${name} ❤️!`);

			console.log("Name: ", name);
			console.log("Phone: ", phone);
			console.log("Services: ", services);
			console.log("Valid Inputs: ", validInputs);
			//proceed
		}
	}

	function handleNameChange(e) {
		const value = e.target.value;
		const isValid = nameRegEx.test(value);
		setValidInputs(isValid);
		setName(e.target.value);
	}

	function handlePhoneChange(e) {
		const value = e.target.value;
		const isValid = phoneRegEx.test(value);
		setValidInputs(isValid);
		setPhone(e.target.value);
	}

	function handleToggleCheckboxChange(id, checked) {
		const s = services.map((s) => {
			if (s.id === id) {
				return {
					...s,
					checked: checked,
				};
			} else {
				return s;
			}
		});
		//console.log("Services: ", s);
		setServices(s);
		//console.log([...servicesData]);
		//setServices([...servicesData]);
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
						value={name}
						onChange={handleNameChange}
						placeholder="Your name"
					/>
				</div>
				<div>
					<input
						className="rounded-md pl-3 py-1"
						type="text"
						required
						value={phone}
						onChange={handlePhoneChange}
						placeholder="Phone number"
					/>
				</div>
			</div>
			{error && (
				<div className="text-center" style={{ color: "red" }}>
					{error}
				</div>
			)}
			<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
				<div className="flex-none w-30 mr-10">
					Please choose your sevice(s):
				</div>
				<div className="flex-1 flex gap-5 flex-wrap">
					{services.map((s) => {
						//console.log(s);
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
			{checkBoxError && (
				<div className="text-center" style={{ color: "red" }}>
					{checkBoxError}
				</div>
			)}
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
