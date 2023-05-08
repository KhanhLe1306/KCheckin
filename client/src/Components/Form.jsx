import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
	updateName,
	updatePhone,
	updateServices,
	submitFormInput,
} from "../slices/formInputSlice/formInputSlice";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const getServices = async () => {
	const response = await axios.get("https://localhost:7097/api/nailservice");
	console.log(response);
	return response.data;
};

const addService = async (serviceName) => {
	console.log("Run mutation");
	return await axios.post("https://localhost:7097/api/nailservice", {
		serviceName: serviceName,
	});
};

const Form = () => {
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["services"],
		queryFn: getServices,
	});
	const queryClient = useQueryClient();
	const addMutation = useMutation({
		mutationFn: addService,
		onSuccess: (data) => {
			queryClient.setQueryData(["services"], (oldServices) => {
				console.log("oldServices: ", oldServices)
				return [...oldServices, data.data]
			});
			//queryClient.invalidateQueries(["services"], { exact: true });
			console.log("data ", data);
		},
	});

	const [serviceName, setServiceName] = useState("");

	const state = useSelector((s) => s.formInput);
	const dispatch = useDispatch();

	if (isLoading) return <p>Loading.....</p>;

	if (data) {
		console.log();
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(submitFormInput());
	}

	function handleToggleCheckboxChange(id, checked) {
		dispatch(updateServices({ id: id, checked: checked }));
	}

	function addServiceHandler(e) {
		e.preventDefault();
		addMutation.mutate(serviceName);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
					<h3>Your Information:</h3>
					<div>
						<input
							className="rounded-md pl-3 py-1"
							required
							type="text"
							value={state.name}
							onChange={(e) => dispatch(updateName(e.target.value))}
							placeholder="Your name"
						/>
					</div>
					<div>
						<input
							className="rounded-md pl-3 py-1"
							type="text"
							required
							value={state.phone}
							onChange={(e) => dispatch(updatePhone(e.target.value))}
							placeholder="Phone number"
						/>
					</div>
				</div>
				<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
					<div className="flex-none w-30 mr-10">
						Please choose your sevice(s):
					</div>
					<div className="flex-1 flex gap-5 flex-wrap">
						{data.map((s) => {
							//console.log("service: ", s);
							return (
								<Checkbox
									key={s.serviceId}
									id={s.serviceId}
									label={s.serviceName}
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

			<hr />

			<form onSubmit={addServiceHandler}>
				<div className="flex w-10/12 mt-20 m-auto bg-blue-400 p-8 rounded-2xl justify-around items-center">
					<h3>Add service:</h3>
					<div>
						<input
							className="rounded-md pl-3 py-1"
							required
							type="text"
							value={serviceName}
							onChange={(e) => setServiceName(e.target.value)}
							placeholder="Service name"
						/>
					</div>
				</div>

				<div className="flex">
					<input
						className="cursor-pointer h-8 w-20 rounded-md mt-8 mx-auto bg-blue-400 text-blue font-bold"
						type="submit"
						value="Add Service"
					></input>
				</div>
			</form>
		</>
	);
};

export default Form;
