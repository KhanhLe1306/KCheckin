import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const LoginForm = () => {
    const authCtx = useContext(AuthContext);
	return (
		<form
			onSubmit={authCtx.onLogin}
			className="w-6/12 bg-blue-900 rounded-xl px-8 py-8 mt-20 m-auto"
		>
			<h1 className="text-center text-xl font-bold text-orange-700">
				Loggin Form
			</h1>
			<div className="text-white mt-3 flex justify-around">
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					placeholder="username"
					className="rounded-md px-2 text-black"
				/>
			</div>
			<div className="text-white mt-3 flex justify-around">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					placeholder="password"
					className="rounded-md px-2 text-black"
				/>
			</div>
			<div className="mt-5">
				<button
					type="submit"
					className="text-white px-3 py-1 bg-blue-300 rounded-md block m-auto hover:bg-blue-400 hover:text-green-900"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
