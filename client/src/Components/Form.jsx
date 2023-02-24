import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const serviceTemplate = [
	"Acrylic set",
	"Acrylic fill",
	"Dip powder",
	"Pedicure",
	"Shellac Manicure",
];

let id = 0;

const Form = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [services, setServices] = useState([]);

	useEffect(() => {
		const s = serviceTemplate.map((s) => {
			return {
				id: id++,
				name: s,
				checked: false,
			};
		});
		//console.log(s);
		setServices(s);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Name: ", name);
		console.log("Phone: ", phone);
		console.log("Services: ", services);
	}

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handlePhoneChange(e) {
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
		setServices(s);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
				<h3>Your Information:</h3>
				<div>
					<input
						className="rounded-md pl-3 py-1"
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
						value={phone}
						onChange={handlePhoneChange}
						placeholder="Phone number"
					/>
				</div>
			</div>

			<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
				<div className="flex-none w-30 mr-10">Please choose your sevice(s):</div>
				<div className="flex-1 flex gap-5 flex-wrap">
					{services.map((s) => (
						<Checkbox
							key={s.id}
							id={s.id}
							label={s.name}
							checked={s.checked}
							onToggleCheckboxChange={handleToggleCheckboxChange}
						/>
					))}
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
