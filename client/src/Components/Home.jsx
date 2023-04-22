import React, { useContext } from "react";
import Nav from "./Nav";
import Brand from "./Brand";
import Form from "./Form";
import LoginForm from "./LoginForm";
import { AuthContext } from "../Context/AuthContextProvider";

const Home = () => {
	const authCtx = useContext(AuthContext);

	return (
		<div className="h-screen bg-blue-300">
			<Nav />
			<Brand />
			{!authCtx.loggedIn && <LoginForm />}
			{authCtx.loggedIn && <Form />}
		</div>
	);
};

export default Home;
