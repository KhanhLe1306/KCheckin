import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Nav = () => {
	const authCtx = useContext(AuthContext);
	return (
		<div className="h-8 p-16 flex justify-between">
			<h1 className="font-bold text-blue-800 text-2xl">KCheckin</h1>
			{authCtx.loggedIn && <button onClick={authCtx.onLogout}>Logout</button>}
		</div>
	);
};

export default Nav;
