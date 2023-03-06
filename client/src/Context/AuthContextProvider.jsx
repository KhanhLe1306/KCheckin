import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext({
	loggedIn: false,
	onLogin: () => {},
	onLogout: () => {},
});

const AuthContextProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const temp = localStorage.getItem("loggedIn");
		if (temp === "1") setLoggedIn(true);
	}, []);

	function handleLoggin(e) {
		e.preventDefault();
		console.log("login");
		localStorage.setItem("loggedIn", "1");
		toast("Welcome in ❤️!");
		setLoggedIn(true);
	}

	function handleLoggout() {
		console.log("logout");
		localStorage.removeItem("loggedIn");
		toast("See you next time ❤️!");
		setLoggedIn(false);
	}

	return (
		<AuthContext.Provider
			value={{
				loggedIn: loggedIn,
				onLogin: handleLoggin,
				onLogout: handleLoggout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
